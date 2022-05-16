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
import GuidePage from "./pages/GuidePage";
import API from "./api";

function App() {

  (async function() {
    const data = await API.auth.user();
    console.log(data)
  })();
  
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<MenuPage />} exact />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/preference" element={<PreferencePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/mymenu" element={<MyMenuPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/guide" element={<GuidePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
