import React from 'react'
import { ProductListPage, ProductPage } from 'pages/index'
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import 'core/styles/index.module.scss'

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="product/:id" element={<ProductPage />} />
            </Routes>
        </RecoilRoot>
    )
}

export default App
