import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ExploreVendorsPage from "./pages/ExploreVendorsPage/ExploreVendorsPage";
import VendorDetailPage from "./pages/VendorDetailPage/VendorDetailPage";
import VendorRegisterPage from "./pages/VendorRegisterPage/VendorRegisterPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import "./App.scss";

const baseUrl = import.meta.env.VITE_API_URL;

function App() {
  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const vendorsRes = await axios.get(baseUrl + `/api/vendors`);
      setVendors(vendorsRes.data);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage vendors={vendors} fetchVendors={fetchVendors} />
              }
            />
            <Route
              path="/vendors"
              element={
                <ExploreVendorsPage
                  vendors={vendors}
                  fetchVendors={fetchVendors}
                />
              }
            />
            <Route path="/vendors/:id" element={<VendorDetailPage />} />
            <Route path="/register" element={<VendorRegisterPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
