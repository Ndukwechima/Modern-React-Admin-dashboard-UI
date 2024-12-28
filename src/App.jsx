import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex h-screen bg-blue-50 text-gray-900 overflow-hidden">
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App