import { PagingParams, PagingProps } from 'helpers/hooks/usePagination/types'
import { ISort } from 'infra/core/Sort.interface'

export type IUseListable<T> = {
    pagingProps: Omit<PagingProps<T>, 'list'>
    list: T
}

export type FetcherSignature<T> = () => T
export interface ListableParams {
    pagingParams: PagingParams
    sortParams?: ISort
}
