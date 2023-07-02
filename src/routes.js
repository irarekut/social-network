import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { UserPage } from "./pages/userPage/userPage";
import { PersonalPage } from "./pages/personalPage/personalPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}
