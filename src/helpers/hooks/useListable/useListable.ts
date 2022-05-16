import { useMemo, useState } from 'react'
import { FetcherSignature, ListableParams, IUseListable } from './types'
import { usePagination } from 'helpers/hooks/usePagination/usePagination'
import { sortObjects } from 'helpers/utils'

/**
 * Комбинированный хук фетчинга данных совмешаюший пагинацию и сортировку
 * @param fetcher - фетчер данных
 * @param listableParams - параметры для пагинации/сортировки
 */
export const useListable = <T extends Array<any>>(
    fetcher: FetcherSignature<T>,
    listableParams: ListableParams
): IUseListable<T> => {
    const { pagingParams, sortParams } = listableParams
    const [data] = useState<T | []>(() => {
        return fetcher()
    })
    const { paging, handleChangePage, list } = usePagination<T>(
        pagingParams,
        data as T
    )

    const listContent = useMemo(() => {
        if (sortParams?.type && sortParams?.path) {
            return sortObjects(sortParams, list)
        }
        return list
    }, [list, sortParams])

    return {
        pagingProps: {
            paging: {
                pageSize: paging.pageSize,
                totalPages: paging.totalPages,
                currentPage: paging.currentPage,
            },
            handleChangePage,
        },
        list: listContent,
    }
}
