import { IProduct } from 'infra/Product/Product.interface'
import { PagingProps } from 'helpers/hooks/usePagination/usePagination'

export interface IProductListView {
    list: IProduct[]
    pagingProps: Omit<PagingProps<IProduct[]>, 'list'>
}
