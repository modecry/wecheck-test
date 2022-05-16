/**
 * Вытаскивает значение по цепочке ключей
 * @param object - ключевой обхект
 * @param path - цепочка ключей формата [keyName.keyName]
 */
export const getValueByPath = (object: Record<string, any>, path: string) => {
    const pathArray: string[] = path.split('.')
    if (pathArray.length === 1 && object[path]) {
        return object[path]
    }
    return pathArray.reduce((prev, key) => {
        if (prev[key]) {
            return prev[key]
        }
        return prev
    }, object)
}
