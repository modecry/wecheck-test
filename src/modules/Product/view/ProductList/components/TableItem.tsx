import React, { memo, useCallback } from 'react'
import { IProduct } from 'infra/Product/Product.interface'
import { TableRow, TableCell } from 'core/components'
import { useNavigate } from 'react-router-dom'

export interface TableItemProps {
    content: IProduct
}

const Component: React.FC<TableItemProps> = (props) => {
    const { content } = props
    const navigate = useNavigate()

    const redirectToDetail = useCallback(() => {
        navigate(`/product/${content.id}`)
    }, [content.id, navigate])

    return (
        <TableRow onClick={redirectToDetail} style={{ cursor: 'pointer' }}>
            <TableCell>{content.name}</TableCell>
            <TableCell>{content.inner_product_id}</TableCell>
            <TableCell>{content.brand.name}</TableCell>
            <TableCell>{content.seller.name}</TableCell>
            <TableCell>{content.last_price} ₽</TableCell>
            <TableCell>{content.sold_money} ₽</TableCell>
            <TableCell>{content.sold_number}</TableCell>
        </TableRow>
    )
}

export const TableItem = memo(Component)
