import React, { useCallback, useState } from 'react'
import cn from 'classnames'
import { ISort, SortType } from 'infra/core/Sort.interface'
import { Icon } from 'core/components'
import s from './styles.module.scss'

export type ToggleFilter = (params: ISort) => void
export interface SortItemProps {
    active: boolean
    pathName: string
    label: string
    onToggleFilter: ToggleFilter
}

/**
 * Компонент-айтем сортировки
 */
export const SortItem: React.FC<SortItemProps> = (props) => {
    const { label, pathName, onToggleFilter, active } = props
    const [type, setType] = useState<SortType>(null)

    const handleClick = useCallback(() => {
        let newType
        if (!type) {
            newType = 'asc'
        }
        if (type === 'asc') {
            newType = 'desc'
        }
        if (type === 'desc') {
            newType = null
        }
        setType(newType as SortType)
        onToggleFilter({
            type: newType as SortType,
            path: !newType ? null : pathName,
        })
    }, [onToggleFilter, pathName, type])

    return (
        <div className={s.sortContainer} onClick={handleClick}>
            <div
                className={cn(s.sortIcon, {
                    [s.active]: active,
                    [s.desc]: type === 'desc',
                })}
            >
                <Icon size={14} iconType={'sort'} />
            </div>
            <div className={cn(s.label, { [s.active]: active })}>{label}</div>
        </div>
    )
}
