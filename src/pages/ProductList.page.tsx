import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    TableHeadCell,
} from 'core/components'

export const ProductListPage: React.FC = () => {
    return (
        <Table style={{ width: '400px' }}>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Head 1</TableHeadCell>
                    <TableHeadCell>Head 2</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
