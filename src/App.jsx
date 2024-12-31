import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Common/Sidebar";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <div className="flex h-screen bg-blue-50 text-gray-900 overflow-hidden">
      {/* BG */}
      <div className="fixed insect-0 z-0">
        <div className="absolute inset-0 bg-blue-200 opacity-20" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Sidebar */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

export default App;
