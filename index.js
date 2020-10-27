export function flatten_recursive(obj, prefix = "") {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + "_" : "";
        if (typeof obj[k] === "object" && obj[k] !== undefined && obj[k] !== null) {
            acc = Object.assign(acc, flatten_recursive(obj[k], pre + k));
        } else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {});
}