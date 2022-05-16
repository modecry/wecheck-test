import React from 'react'
import { useRecoilValue } from 'recoil'
import { IProduct } from 'infra/Product/Product.interface'
import { IProductListView } from 'modules/Product/interfaces/ProductList/ProductList.interface'
import { getProductsList } from 'modules/Product/fetchers'
import { useListable } from 'helpers/hooks/useListable/useListable'
import { ProductsSortState } from './state/ProductsSort.state'

export interface ProductListContainerProps {
    component: React.ComponentType<IProductListView>
}

export const ProductListContainer: React.FC<ProductListContainerProps> = (
    props
) => {
    const { component: Component } = props
    const sortParams = useRecoilValue(ProductsSortState)

    const { list, pagingProps } = useListable<IProduct[]>(getProductsList, {
        pagingParams: {
            pageSize: 4,
        },
        sortParams,
    })
    return <Component list={list} pagingProps={pagingProps} />
}
