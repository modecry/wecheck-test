import React, { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { IProductListView } from 'modules/Product/interfaces/ProductList/ProductList.interface'
import { ISort } from 'infra/core/Sort.interface'
import { ProductsSortState } from 'modules/Product/containers/ProductList/state/ProductsSort.state'

import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    Pagination,
    Icon,
    SortItem,
} from 'core/components'
import { TableItem } from './components/TableItem'

import { SORT_PATHS } from './constants'

import s from './style.module.scss'

export const ProductListView: React.FC<IProductListView> = (props) => {
    const { list, pagingProps } = props
    const [sort, setSort] = useRecoilState(ProductsSortState)

    const handleChangeFilter = useCallback(
        (params: ISort) => {
            setSort(params)
        },
        [setSort]
    )

    const handleResetSort = useCallback(() => {
        setSort({
            path: null,
            type: null,
        })
    }, [setSort])

    const composeSortHeaders = useMemo(() => {
        return Object.keys(SORT_PATHS).map((keyPath: any) => {
            return (
                <TableHeadCell key={keyPath}>
                    <SortItem
                        // @ts-ignore
                        label={SORT_PATHS[keyPath]}
                        pathName={keyPath as string}
                        active={sort.path === keyPath}
                        onToggleFilter={handleChangeFilter}
                    />
                </TableHeadCell>
            )
        })
    }, [handleChangeFilter, sort.path])

    return (
        <div style={{ width: '100%' }}>
            <Table style={{ width: '100%' }}>
                <TableHead>
                    <TableRow isHead className={s.headRow}>
                        {composeSortHeaders}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((item) => (
                        <TableItem content={item} key={item.id} />
                    ))}
                </TableBody>
            </Table>
            <div className={s.controls}>
                <div className={s.controlsItems}>
                    <div>
                        <Pagination
                            currentPage={pagingProps.paging.currentPage}
                            totalPages={pagingProps.paging.totalPages}
                            onPageChange={pagingProps.handleChangePage}
                        />
                    </div>
                    <div className={s.delimiter} />

                    <div className={s.resetContainer} onClick={handleResetSort}>
                        <div className={s.resetIconContainer}>
                            <Icon iconType={'trash'} size={18} />
                        </div>
                        <span>Сбросить</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
