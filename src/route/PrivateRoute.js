import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";
//id 값으로 해당 상품 데이터를 가져온다.

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
