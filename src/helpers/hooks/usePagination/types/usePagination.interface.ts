import { IPaging } from 'infra/core/Paging.interface'

export type HandleChangePageSignature = (selectedItem: {
    selected: number
}) => void

export interface PagingProps<T> {
    paging: IPaging
    handleChangePage: HandleChangePageSignature
    list: T
}

export interface PagingParams {
    pageSize: number
    currentPage?: number
}
