import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../page/login/LoginPage";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../page/home/HomePage";
import BarangPage from "../page/barang/BarangPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainRoute = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/barang" element={<BarangPage />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
