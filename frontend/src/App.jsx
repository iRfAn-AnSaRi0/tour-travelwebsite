import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Destination from "./pages/Destination.jsx";
import Package from "./pages/Package.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import LoginSignupModal from "./components/LoginSignupModal.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("user")) || null
  // );
  const [user, setUser] = useState(() => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    console.error("Invalid user in localStorage", err);
    localStorage.removeItem("user");
    return null;
  }
});

  return (
    <>
      <Navbar
        setModalOpen={setModalOpen}
        setIsLogin={setIsLogin}
        setUser={setUser}
      />

      {/* LOGIN/SIGNUP MODAL */}
      {modalOpen && (
        <LoginSignupModal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setModalOpen={setModalOpen}
          setUser={setUser}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/package" element={<Package />} />
        <Route
          path="/contact"
          element={
            <Contact
              setModalOpen={setModalOpen}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
