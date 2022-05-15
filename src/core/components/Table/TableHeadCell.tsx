import React from 'react'
import cn from 'classnames'
import { BaseTableItem } from './types'
import s from './style.module.scss'

export type TableHeadCellProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableHeaderCellElement>

/**
 * Компонент обертка ячейки таблицы заголовка
 */
export const TableHeadCell: React.FC<TableHeadCellProps> = (props) => {
    const { children, className, ...rest } = props
    return (
        <td className={cn(s.tableGap, className)} {...rest}>
            {children}
        </td>
    )
}
