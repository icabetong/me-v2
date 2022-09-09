
export default function caseCoverter<T>(object: any) {
  Object.keys(object).forEach(key => {
    let newKey = key.replace(/(\_\w)/g, (m) => m[1].toUpperCase())
    if (newKey !== key) {
      object[newKey] = object[key]
      delete object[key]
    }
  })
  return object as T
}