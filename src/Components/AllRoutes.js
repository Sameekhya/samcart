import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import Home from "./Home";
import PageNoTFound from "./PageNoTFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNoTFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
