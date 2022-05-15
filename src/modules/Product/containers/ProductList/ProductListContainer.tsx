import React from 'react'

import { IProductListView } from 'modules/Product/interfaces/ProductList/ProductList.interface'
import { getProductsList } from 'modules/Product/fetchers'

export interface ProductListContainerProps {
    component: React.ComponentType<IProductListView>
}

export const ProductListContainer: React.FC<ProductListContainerProps> = (
    props
) => {
    const { component: Component } = props

    //fetch data
    const list = getProductsList()

    return <Component list={list} />
}
