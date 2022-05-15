import cn from 'classnames'
import { BaseTableItem } from './types'
import React from 'react'

export type TableHeadProps = BaseTableItem &
    React.HTMLAttributes<HTMLTableSectionElement>

/**
 * Компонент обертка таблицы
 */
export const TableHead: React.FC<TableHeadProps> = (props) => {
    const { children, className, ...rest } = props

    return (
        <thead className={cn(className)} {...rest}>
            {children}
        </thead>
    )
}
