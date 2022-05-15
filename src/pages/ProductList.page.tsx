import React from 'react'
import { ProductListContainer } from 'modules/Product/containers/ProductList/ProductListContainer'
import { ProductListView } from 'modules/Product/view/ProductList/ProductListView'
import { AppLayout } from 'core/layouts/AppLayout'

export const ProductListPage: React.FC = () => {
    return (
        <AppLayout title={'Таблица товаров'}>
            <ProductListContainer component={ProductListView} />
        </AppLayout>
    )
}
