import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import DefaultLayout from "./layouts/DefaultLayout";
import MainPage from "./pages/MainPage";
import CommunityPage from "./pages/CommunityPage";
import GuidePage from "./pages/GuidePage";
import MenuPage from "./pages/MenuPage";
import PreferencePage from "./pages/PreferencePage";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/preference" element={<PreferencePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
