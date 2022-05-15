import React from 'react'
import { ProductListPage, ProductPage } from 'pages/index'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="product/:id" element={<ProductPage />} />
        </Routes>
    )
}

export default App
