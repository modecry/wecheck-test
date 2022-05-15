import React from 'react'
import { IProductListView } from 'modules/Product/interfaces/ProductList/ProductList.interface'

import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    Pagination,
    Icon,
} from 'core/components'
import { TableItem } from './components/TableItem'

import s from './style.module.scss'

export const ProductListView: React.FC<IProductListView> = (props) => {
    const { list, pagingProps } = props

    return (
        <div style={{ width: '100%' }}>
            <Table style={{ width: '100%' }}>
                <TableHead>
                    <TableRow isHead>
                        <TableHeadCell>
                            <strong>Название товара</strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>артикул</strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>бренд</strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>продавец</strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>цена</strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>заказы руб </strong>
                        </TableHeadCell>
                        <TableHeadCell>
                            <strong>заказы шт</strong>
                        </TableHeadCell>
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

                    <div className={s.resetContainer}>
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
