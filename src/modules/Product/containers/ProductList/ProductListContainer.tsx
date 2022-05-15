import React from 'react'

import { IProductListView } from 'modules/Product/interfaces/ProductList/ProductList.interface'
import { getProductsList } from 'modules/Product/fetchers'
import { useListable } from 'helpers/hooks/useListable/useListable'
import { IProduct } from 'infra/Product/Product.interface'

export interface ProductListContainerProps {
    component: React.ComponentType<IProductListView>
}

export const ProductListContainer: React.FC<ProductListContainerProps> = (
    props
) => {
    const { component: Component } = props

    const { list, pagingProps } = useListable<IProduct[]>(getProductsList, {
        pagingParams: {
            pageSize: 4,
        },
    })

    return <Component list={list} pagingProps={pagingProps} />
}
