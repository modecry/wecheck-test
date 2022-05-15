import { ISort } from 'infra/core/Sort.interface'
import { getValueByPath } from 'helpers/utils/getValueByPath'

/**
 * Сортировка объектов по вложенности
 * @param params - параметры сортировки
 * @param list - сортируемый список
 */
export const sortObjects = <T extends Array<Record<string, any>>>(
    params: ISort,
    list: T
): T => {
    const listObjects = [...list] as T
    if (params.path && params.type) {
        return listObjects.sort((a, b) => {
            let FirstValue = getValueByPath(a, params.path as string)
            let SecondValue = getValueByPath(b, params.path as string)

            if (typeof FirstValue === 'string' && !Number(FirstValue)) {
                FirstValue = FirstValue.toLowerCase()
                SecondValue = SecondValue.toLowerCase()
            } else {
                FirstValue = Number(FirstValue)
                SecondValue = Number(SecondValue)
            }

            switch (params.type) {
                case 'asc':
                    return FirstValue < SecondValue
                        ? -1
                        : FirstValue > SecondValue
                        ? 1
                        : 0
                case 'desc':
                    return SecondValue < FirstValue
                        ? -1
                        : SecondValue > FirstValue
                        ? 1
                        : 0
                default:
                    return FirstValue < SecondValue
                        ? -1
                        : FirstValue > SecondValue
                        ? 1
                        : 0
            }
        })
    }
    return list
}
