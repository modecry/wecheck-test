import React from 'react'
import cn from 'classnames'
import { IPaging } from 'infra/core/Paging.interface'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { Icon } from 'core/components'
import s from './styles.module.scss'

export type PaginationProps = Omit<IPaging, 'pageSize'> &
    Omit<ReactPaginateProps, 'pageCount'>

/**
 * Компонент пагинации
 * @param PaginationProps - Наследует интерфейсы вложенного компонента и интерфейс пагинации
 */
export const Pagination: React.FC<PaginationProps> = (props) => {
    const { totalPages, currentPage, ...rest } = props

    return (
        <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage - 1}
            className={s.paginationContainer}
            previousClassName={s.arrow}
            nextClassName={s.arrow}
            pageClassName={s.pagingItem}
            activeClassName={cn(s.pagingItem, s.active)}
            breakClassName={s.pagingItem}
            previousLabel={<Icon iconType={'arrow'} size={16} />}
            nextLabel={
                <Icon
                    iconType={'arrow'}
                    size={16}
                    className={s.arrowIconNext}
                />
            }
            {...rest}
        />
    )
}
