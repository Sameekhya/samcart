import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import PageNoTFound from "../Pages/PageNoTFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home  title="Home"/>} />
        <Route path="cart" element={<Cart  title="Cart"/>} />
        <Route path="*" element={<PageNoTFound title="PageNotFound"/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
