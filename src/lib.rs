use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn flatten_recursive(val: &JsValue, prefix: String) -> Result<JsValue, JsValue> {
    let target = &JsValue::from(val);

    let tmp = "foo".to_string();
    let tmp2 = "baz".to_string();
    let concat = tmp + &tmp2;
    print!("{}", concat);

    // Note: Map, Set and Array all have .keys method
    let keys = js_sys::Reflect::own_keys(target)?;
    for key in keys.iter() {
        let val = js_sys::Reflect::get(target, &key)?;
        let key = key
            .as_string()
            .ok_or_else(|| "failed to extract object key")?;
        if val.is_object() {
            flatten_recursive(&val, format!("{}_{}", prefix, key))?;
        } else {
            js_sys::Reflect::set(
                target,
                &JsValue::from(format!("{}_{}", prefix, key)),
                &val,
            )?;
        }
    }

    Ok(JsValue::from(target))
}
