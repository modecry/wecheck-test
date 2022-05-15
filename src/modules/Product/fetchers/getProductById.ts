import { IProduct } from 'infra/Product/Product.interface'
import FakeData from 'core/FAKE_DATA.json'
import { IListableContent } from 'infra/core/ListableContent.interface'

/**
 * Поиск продукта по id
 * @param id - id  продукта
 */
export const getProductById = (id: number): IProduct | null => {
    const response: IListableContent<IProduct[]> =
        FakeData as unknown as IListableContent<IProduct[]>
    const foundItem = response.all_data.find((item) => item.id === id)
    if (foundItem) {
        return foundItem
    }
    return null
}
