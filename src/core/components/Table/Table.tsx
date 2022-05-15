import cn from 'classnames'
import { BaseTableItem } from './types'
import React from 'react'

export type TableProps = BaseTableItem & React.HTMLAttributes<HTMLTableElement>

/**
 * Компонент обертка таблицы
 */
export const Table: React.FC<TableProps> = (props) => {
    const { children, className, ...rest } = props
    return (
        <table className={cn(className)} {...rest}>
            {children}
        </table>
    )
}
