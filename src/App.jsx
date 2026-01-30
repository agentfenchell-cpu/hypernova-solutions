import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNav from "./components/ScrollToTopOnNav";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import CGV from "./pages/CGV";
import MentionsLegales from "./pages/MentionsLegales";
import Privacy from "./pages/Privacy";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNav />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
