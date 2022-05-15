import { IPaging } from 'infra/core/Paging.interface'
import { useCallback, useMemo, useState } from 'react'

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

/**
 * Хук выполняющий пейджинг
 * @param params - параметры хука
 * @param list - лист с контентом
 */
export const usePagination = <T extends Array<any>>(
    params: PagingParams,
    list: T
): PagingProps<T> => {
    const [currentPage, setCurrentPage] = useState<number>(
        params?.currentPage || 1
    )
    const pagingList = useMemo(() => {
        let offsetStart = 0
        if (currentPage > 1) {
            offsetStart = (currentPage - 1) * params.pageSize
        }
        const ofssetEnd = offsetStart + params.pageSize
        return list.slice(offsetStart, ofssetEnd)
    }, [currentPage, list, params.pageSize])

    const totalPages = useMemo(() => {
        return Math.ceil(list.length / params.pageSize)
    }, [list.length, params.pageSize])

    const handleChangePage: HandleChangePageSignature = useCallback(
        ({ selected }) => {
            setCurrentPage(selected + 1)
        },
        [setCurrentPage]
    )

    return {
        paging: {
            totalPages,
            pageSize: params.pageSize,
            currentPage,
        },
        handleChangePage,
        list: pagingList as T,
    }
}
