export interface IconProps {
    size?: string | number
    color?: string
    iconType: IconType
    className?: string
    style?: React.CSSProperties
}
export type IconType = 'arrow' | 'sort' | 'trash'

/**
 * Компонент иконка
 * @param IconType - тип иконки
 */
export const Icon: React.FC<IconProps> = (props) => {
    const { size, color, iconType, className, style } = props

    switch (iconType) {
        case 'arrow':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={style}
                    className={className}
                >
                    <path
                        d="M9.25 12.4445L3.80556 7.00001L9.25 1.55556"
                        stroke={color || '#D9D9D9'}
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
            )
        case 'sort':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={style}
                    className={className}
                >
                    <rect
                        width="10.2667"
                        height="1.5"
                        transform="matrix(1 0 0 -1 1.86667 11.6667)"
                        fill={color || '#D9D9D9'}
                    />
                    <path
                        d="M6.53333 7.46667H12.1333V5.96667H6.53333V7.46667Z"
                        fill={color || '#D9D9D9'}
                    />
                    <path
                        d="M9.33334 3.26666H12.1333V1.76666H9.33334V3.26666Z"
                        fill={color || '#D9D9D9'}
                    />
                </svg>
            )
        case 'trash':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={style}
                    className={className}
                >
                    <path
                        d="M2.00001 4H3.30001H17.5"
                        stroke={color || '#D9D9D9'}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M5.74982 3.79999V2.8773C5.74982 2.37941 5.93946 1.90191 6.27703 1.54985C6.61459 1.19779 7.07243 1 7.54982 1H11.1498C11.6272 1 12.085 1.19779 12.4226 1.54985C12.7602 1.90191 12.9498 2.37941 12.9498 2.8773V3.79999M15 7.30981L14.75 10.5951L14.25 15.1227C14.25 15.6206 14.0604 16.0981 13.7228 16.4501C13.3852 16.8022 12.9274 17 12.45 17H6.55002C6.07263 17 5.61479 16.8022 5.27722 16.4501C4.93966 16.0981 4.75002 15.6206 4.75002 15.1227L4.25002 10.5951L4.00002 7.30981"
                        stroke={color || '#D9D9D9'}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            )
        default:
            return null
    }
}
