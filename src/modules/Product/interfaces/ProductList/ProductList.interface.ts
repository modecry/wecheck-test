import { IProduct } from 'infra/Product/Product.interface'
import { PagingProps } from 'helpers/hooks/usePagination/types'

export interface IProductListView {
    list: IProduct[]
    pagingProps: Omit<PagingProps<IProduct[]>, 'list'>
}
