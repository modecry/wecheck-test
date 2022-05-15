import React from 'react'
import cn from 'classnames'
import { BaseTableItem } from './types'

import s from './style.module.scss'

export type TableBodyProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableSectionElement>

/**
 * Компонент обертка body таблицы
 */
export const TableBody: React.FC<TableBodyProps> = (props) => {
    const { children, className, ...rest } = props
    return (
        <tbody className={cn(s.tableContainer, className)} {...rest}>
            {children}
        </tbody>
    )
}
