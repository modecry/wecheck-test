import React, { useEffect } from 'react'
import s from './style.module.scss'

export interface AppLayoutProps {
    children: React.ReactNode
    title?: string
}

/**
 * Базовый лейаут приложения
 */
export const AppLayout: React.FC<AppLayoutProps> = (props) => {
    const { children, title } = props

    useEffect(() => {
        if (title && global?.document) {
            document.title = title
        }
    }, [title])

    return <div className={s.appWrapper}>{children}</div>
}
