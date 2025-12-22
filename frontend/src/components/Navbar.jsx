import React, { useState, useRef } from 'react';
import '../styles.css';
import { Link } from "react-router-dom";
import Menu from "./Menu";

const ArrowIcon = ({ open }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 20 20"
    fill="none"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
    }}
  >
    <path
      d="M6 8l4 4 4-4"
      stroke="currentColor"
      strokeWidth="4.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = ({ menuItems = []}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const closeTimer = useRef(null);
  const navRef = useRef(null);
  const handleMouseEnter = (index) => {
    clearTimeout(closeTimer.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenIndex(null);
      setOpenSubIndex(null);
    }, 150); // delay to prevent flicker
  };

  const handleSubEnter = (i) => {
    clearTimeout(closeTimer.current);
    setOpenSubIndex(i);
  };

  const handleSubLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenSubIndex(null);
    }, 150);
  };

  const closeAllMenus = () => {
  setOpenIndex(null);
  setOpenSubIndex(null);
  clearTimeout(closeTimer.current);
};


  return (
    <div className='bg-gray-200 w-full md:pt-[8px] md:pb-[8px] md:block '>
    <div className="navbar-container flex" ref={navRef} onMouseLeave={handleMouseLeave}>
      <Menu />
      <ul className="navbar-menu flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="navbar-item"
              onMouseEnter={() => handleMouseEnter(index)}
            >              
              <Link to={item.path} className="navbar-link" onClick={closeAllMenus} >
                {item.label}
                {item.children && (
                  <span className="arrow">
                    <ArrowIcon open={openIndex === index} />
                  </span>
                )}
              </Link>

              {/* DROPDOWN MENU */}
              {item.children && (
                <div className={`dropdown ${openIndex === index ? "open" : ""}`}>
                  <ul>
                    {item.children.map((child, cIndex) => (
                      <li
                        key={cIndex}
                        className="dropdown-item"
                        onMouseEnter={() => handleSubEnter(cIndex)}
                        onMouseLeave={handleSubLeave}
                      >
                        {child.children ? (
                          <>
                            <Link
                              to={child.path}
                              className="dropdown-link has-submenu"
                              onClick={closeAllMenus}
                            >
                              {child.label}
                            </Link>

                            {/* SUBMENU LEVEL 2 */}
                            <div
                              className={`submenu ${
                                openSubIndex === cIndex ? "open" : ""
                              }`}
                            >
                              <ul>
                                {child.children.map((sub, sIndex) => (
                                  <li key={sIndex} className="submenu-item">
                                  <Link
                                    to={
                                      child.singlePage
                                        ? `${child.path}#${sub.label
                                            .toLowerCase()
                                            .replace(/ /g, "-")
                                            .replace(/&/g, "")
                                            .replace(/--/g, "-")}`
                                        : sub.path
                                    }
                                    onClick={closeAllMenus}
                                  >
                                    {sub.label}
                                  </Link>

                                </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link to={child.path} className="dropdown-link" onClick={closeAllMenus}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
};

export default Navbar;