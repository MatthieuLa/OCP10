// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./features/store";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import "./styles/header.css";
import "./styles/footer.css";

function AppContent() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignIn /> : <Navigate to="/user" />}
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
