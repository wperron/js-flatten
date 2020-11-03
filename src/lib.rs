use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn flatten_recursive(obj: JsValue, prefix: String, acc: JsValue) -> Result<JsValue, JsValue> {
    let mut copyacc = acc.clone();
    if copyacc.is_undefined() {
        copyacc = JsValue::from(js_sys::Object::new());
    }

    // Note: Map, Set and Array all have .keys method
    let keys = js_sys::Reflect::own_keys(&obj)?;
    for key in keys.iter() {
        let val = js_sys::Reflect::get(&obj, &key)?;
        let key = key
            .as_string()
            .ok_or_else(|| "failed to extract object key")?;

        let mut pre = prefix.clone();
        if pre.len() > 0 {
            pre = format!("{}_", prefix)
        }
        let newkey = format!("{}{}", pre, key);

        if val.is_object() && !val.is_undefined() {
            copyacc = flatten_recursive(val, newkey, copyacc)?;
        } else {
            js_sys::Reflect::set(
                &copyacc,
                &JsValue::from(newkey),
                &val,
            )?;
        }
    }

    Ok(JsValue::from(copyacc))
}
