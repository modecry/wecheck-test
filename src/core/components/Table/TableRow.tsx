import React from 'react'
import cn from 'classnames'
import { BaseTableItem } from './types'
import s from './style.module.scss'

export type TableRowProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableRowElement>

/**
 * Компонент обертка строки таблицы
 */
export const TableRow: React.FC<TableRowProps> = (props) => {
    const { children, className, ...rest } = props
    return (
        <tr className={cn(s.tableRow, className)} {...rest}>
            {children}
        </tr>
    )
}
