import React from 'react'
import { useParams } from 'react-router-dom'
import { AppLayout } from 'core/layouts/AppLayout'
import { getProductById } from 'modules/Product/fetchers'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'
const NotFound = () => (
    <AppLayout title={'404 Not Found ;('}>Нет такой страницы(((</AppLayout>
)

export const ProductPage: React.FC = () => {
    const { id } = useParams()

    if (Number(id)) {
        const product = getProductById(Number(id))
        if (!product) return <NotFound />
        return (
            <AppLayout title={product?.name}>
                <div>
                    <h1
                        style={{
                            fontSize: '20px',
                            display: 'block',
                            paddingBottom: '20px',
                        }}
                    >
                        Название продукта: {product.name}
                    </h1>
                    <JSONPretty data={product} />
                </div>
            </AppLayout>
        )
    }
    return <NotFound />
}
