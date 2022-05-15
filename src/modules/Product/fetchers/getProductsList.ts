import { IProduct } from 'infra/Product/Product.interface'
import FakeData from 'core/FAKE_DATA.json'
import { IListableContent } from 'infra/core/ListableContent.interface'

/**
 * Получение всех продуктов
 */
export const getProductsList = (): IProduct[] => {
    const response: IListableContent<IProduct[]> =
        FakeData as unknown as IListableContent<IProduct[]>
    return response.all_data
}
