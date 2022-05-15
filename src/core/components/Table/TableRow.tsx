import React from 'react'
import cn from 'classnames'
import { BaseTableItem } from './types'
import s from './style.module.scss'

export type TableRowProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableRowElement> & {
        isHead?: boolean
    }

/**
 * Компонент обертка строки таблицы
 */
export const TableRow: React.FC<TableRowProps> = (props) => {
    const { children, className, isHead, ...rest } = props
    return (
        <tr
            className={cn(s.tableRow, { [s.head]: isHead }, className)}
            {...rest}
        >
            {children}
        </tr>
    )
}
