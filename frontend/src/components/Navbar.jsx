



import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LoginSignupModal from "./LoginSignupModal";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setOpenUserMenu(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destination", path: "/destination" },
    { name: "Tour Package", path: "/package" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    /* ✅ STICKY ON ALL DEVICES */
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* 🔹 TOP BAR */}
      <div className="bg-primary text-light px-4 md:px-25 py-2">
        <div className="flex flex-wrap justify-between items-center gap-2">
          {/* CONTACT (VISIBLE ON MOBILE) */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
            <a href="tel:+918392092399" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>+91 8392092399</span>
            </a>

            <a href="mailto:gosikkim@help.com" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Gosikkim@help.com</span>
            </a>
          </div>

          {/* LOGIN / USER */}
          {!user ? (
            <div className="flex gap-3 text-sm">
              <button
                onClick={() => {
                  setIsLogin(false);
                  setModalOpen(true);
                }}
                className="btn-outline-light px-3 py-1"
              >
                Signup
              </button>
              <button
                onClick={() => {
                  setIsLogin(true);
                  setModalOpen(true);
                }}
                className="btn-solid-light px-3 py-1"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="w-9 h-9 rounded-full bg-light text-primary flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>

              {openUserMenu && (
                <div className="absolute right-0 mt-2 z-1 bg-white text-dark rounded-lg shadow-lg p-3 w-40">
                  <p className="font-semibold text-sm">{user.fullName}</p>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 text-sm mt-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 🔹 MAIN NAV */}
      <nav className="relative bg-light px-4 md:px-25 py-4 font-poppins text-dark">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="text-3xl md:text-5xl">
            <h1>
              <span>Go</span>Sikkim
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-md">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="nav-link">
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* ✅ MOBILE OVERLAY MENU (DOES NOT PUSH HEIGHT) */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-light shadow-lg md:hidden">
            <div className="flex flex-col gap-4 p-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* MODAL */}
      {modalOpen && (
        <LoginSignupModal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setModalOpen={setModalOpen}
          setUser={setUser}
        />
      )}
    </header>
  );
};

export default Navbar;
