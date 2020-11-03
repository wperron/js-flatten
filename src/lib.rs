use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn flatten_recursive(obj: JsValue, prefix: String, mut acc: &JsValue) -> Result<JsValue, JsValue> {
    if acc.is_undefined() {
        acc = &js_sys::Object::new();
    }
    // Note: Map, Set and Array all have .keys method
    let keys = js_sys::Reflect::own_keys(&obj)?;
    for key in keys.iter() {
        let val = js_sys::Reflect::get(&obj, &key)?;
        let key = key
            .as_string()
            .ok_or_else(|| "failed to extract object key")?;

        if val.is_object() {
            flatten_recursive(val, format!("{}_{}", prefix, key), acc)?;
        } else {
            js_sys::Reflect::set(
                acc,
                &JsValue::from(format!("{}_{}", prefix, key)),
                &val,
            )?;
        }
    }

    Ok(JsValue::from(obj))
}
