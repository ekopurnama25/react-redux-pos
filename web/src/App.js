import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Login from "./pages/Login";
import UsersPages from "./pages/UsersPages";
import UsersUpdatePages from "./pages/UsersUpdatePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePages />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/users" element={<UsersPages />} />
        <Route exact path="/users-update/:id" element={<UsersUpdatePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
