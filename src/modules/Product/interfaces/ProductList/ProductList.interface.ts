import { IProduct } from 'infra/Product/Product.interface'
import { IPaging } from 'infra/core/Paging.interface'

export interface IProductListView {
    list: IProduct[]
    pagination?: IPaging //todo: complete paging
}
