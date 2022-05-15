import { IPaging } from 'infra/core/Paging.interface'
import { useState } from 'react'
import {
    PagingParams,
    PagingProps,
} from 'helpers/hooks/usePagination/usePagination'
import { usePagination } from 'helpers/hooks/usePagination/usePagination'

export type IUseListable<T> = {
    pagingProps: Omit<PagingProps<T>, 'list'>
    list: T
}

export type FetcherSignature<T> = () => T
export interface ListableParams {
    pagingParams: PagingParams
}

/**
 * Комбинированный хук фетчинга данных совмешаюший пагинацию и сортировку
 * @param fetcher - фетчер данных
 * @param listableParams - параметры для пагинации/сортировки
 */
export const useListable = <T extends Array<any>>(
    fetcher: FetcherSignature<T>,
    listableParams: ListableParams
): IUseListable<T> => {
    const { pagingParams } = listableParams
    const [data] = useState<T | []>(() => {
        return fetcher()
    })
    const { paging, handleChangePage, list } = usePagination<T>(
        pagingParams,
        data as T
    )

    return {
        pagingProps: {
            paging: {
                pageSize: paging.pageSize,
                totalPages: paging.totalPages,
                currentPage: paging.currentPage,
            },
            handleChangePage,
        },
        list,
    }
}
