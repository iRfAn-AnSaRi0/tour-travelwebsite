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
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({}); // store which submenu is open
  const [destOpen, setDestOpen] = useState(false);

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
    {
      name: "Destination",
      path: "/destination",
      submenu: [
        { name: "North Sikkim", path: "/north-sikkim" },
        { name: "South Sikkim", path: "/south-sikkim" },
        { name: "East Sikkim", path: "/east-sikkim" },
        { name: "West Sikkim", path: "/west-sikkim" },
      ],
    },
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

            <a
              href="mailto:gosikkim@help.com"
              className="flex items-center gap-1"
            >
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

      <nav className="relative bg-light px-4 md:px-25 py-4 font-poppins text-dark">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="text-3xl md:text-5xl">
            <h1>
              <span>Go</span>Sikkim
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-md items-center relative">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setDestOpen(true)}
                    onMouseLeave={() => setDestOpen(false)}
                  >
                    {/* Parent link */}
                    <NavLink
                      to={item.path}
                      className="cursor-pointer px-2 py-1 hover:text-[var(--color-primary)]"
                    >
                      {item.name}
                    </NavLink>

                    {/* Smooth submenu */}
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48 z-20 transition-all duration-300 overflow-hidden ${
                        destOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-[var(--color-light)]"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="nav-link px-2 py-1 hover:text-[var(--color-primary)]"
                  >
                    {item.name}
                  </NavLink>
                );
              }
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-light shadow-lg md:hidden">
            <div className="flex flex-col gap-4 p-5">
              {navItems.map((item) => {
                if (item.submenu) {
                  const isOpen = mobileSubmenuOpen[item.name] || false;

                  return (
                    <div key={item.name} className="flex flex-col">
                      {/* Parent link */}
                      <div className="flex justify-between items-center w-full">
                        <NavLink
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium"
                        >
                          {item.name}
                        </NavLink>
                        <button
                          onClick={() =>
                            setMobileSubmenuOpen({
                              ...mobileSubmenuOpen,
                              [item.name]: !isOpen,
                            })
                          }
                        >
                          {isOpen ? "▲" : "▼"}
                        </button>
                      </div>

                      {/* Submenu */}
                      {isOpen && (
                        <div className="flex flex-col pl-4 mt-2 gap-2">
                          {item.submenu.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-gray-700 hover:text-[var(--color-primary)]"
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-[var(--color-primary)]"
                    >
                      {item.name}
                    </NavLink>
                  );
                }
              })}
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
