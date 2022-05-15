import React from 'react'
import cn from 'classnames'
import { BaseTableItem } from './types'

import s from './style.module.scss'

export type TableCellProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableCellElement>

/**
 * Компонент обертка ячейки таблицы
 */
export const TableCell: React.FC<TableCellProps> = (props) => {
    const { children, className, ...rest } = props
    return (
        <td className={cn(s.tableGap, className)} {...rest}>
            {children}
        </td>
    )
}
