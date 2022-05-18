import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import DefaultLayout from "./layouts/DefaultLayout";
import NoticePage from "./pages/NoticePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PreferencePage from "./pages/SignupPage/PreferencePage";
import MenuPage from "./pages/MenuPage";
import MyMenuPage from "./pages/MyMenuPage";
import CommunityPage from "./pages/CommunityPage";
import PostViewPage from "./pages/CommunityPage/PostViewPage";
import GuidePage from "./pages/GuidePage";
import NewPostPage from "./pages/CommunityPage/NewPostPage";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<MenuPage />} exact />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/preference" element={<PreferencePage />} />
            <Route path="/mymenu" element={<MyMenuPage />} />
            <Route path="/community/posts" element={<CommunityPage />} />
            <Route path="/community/new" element={<NewPostPage />} />
            <Route path="/community/posts/:userId" element={<PostViewPage />} />
            <Route path="/guide" element={<GuidePage />} />
          </Routes>
        </DefaultLayout>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
