import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Category,
  Coupons,
  Customer,
  Home,
  Login,
  Orders,
  Product,
  Member,
  Setting,
} from "./app/pages";
import PrivetRoute from "./app/privetRoute/PrivetRoute";
import { useSelector } from "react-redux";

const App = () => {

  const theme = useSelector((state) => state?.theme?.theme);

  useEffect(() =>{
    const myTheme = localStorage.getItem("theme");
      if(theme) document.body.className = myTheme
  }, [theme])

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivetRoute>
              <Home />
            </PrivetRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivetRoute>
              <Product />
            </PrivetRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivetRoute>
              <Category />
            </PrivetRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivetRoute>
              <Customer />
            </PrivetRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivetRoute>
              <Orders />
            </PrivetRoute>
          }
        />
        <Route
          path="/coupons"
          element={
            <PrivetRoute>
              <Coupons />
            </PrivetRoute>
          }
        />
        <Route
          path="/member"
          element={
            <PrivetRoute>
              <Member />
            </PrivetRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivetRoute>
              <Setting />
            </PrivetRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
