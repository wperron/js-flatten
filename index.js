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

export function flatten_dynamic(obj, prefix = "") {
  const queue = Object.keys(obj);

  while (queue.length > 0) {
    const k = queue.shift();
    if (typeof obj[k] === "object" && obj[k] !== undefined && obj[k] !== null) {
      for (const subkey in obj[k]) {
        const newkey = k + "_" + subkey;
        obj[newkey] = obj[k][subkey];
        queue.push(newkey);
      }
      delete obj[k];
    } else {
      obj[prefix + k] = obj[k];
    }
  }
  return obj;
}
