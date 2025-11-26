import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import { Link } from "react-router-dom";


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
  const navRef = useRef(null);
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  const toggleSubDropdown = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenIndex(null);
      setOpenSubIndex(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div className="navbar-container" style={{display:"flex",marginTop:"25px"}}  ref={navRef}>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <Link to={item.path} className="navbar-link" onClick={() => toggleDropdown(index)}>
              {item.label}
              {item.children && (
                <span className="arrow">
                  <ArrowIcon open={openIndex === index} />
                </span>
              )}
            </Link>

            {item.children && (
              <div className={`dropdown ${openIndex === index ? 'open' : ''}`}>
                <ul>
                  {item.children.map((child, cIndex) => (
                    <li key={cIndex} className="dropdown-item" 
                    onMouseEnter={() => setOpenSubIndex(cIndex)}
                    onMouseLeave={() => setOpenSubIndex(null)}>
                      {child.children ? (
                        <>
                          <Link to={child.path} className="dropdown-link has-submenu" onMouseOver={() => toggleSubDropdown(cIndex)}
                            onClick={() => {setOpenIndex(null);setOpenSubIndex(null);}}>
                            {child.label}
                          </Link>
                          <div className={`submenu ${openSubIndex === cIndex ? 'open' : ''}`}>                          
                            <ul>
                              {child.children.map((subItem, sIndex) => (
                                <li key={sIndex} className="submenu-item">
                                  <Link to={subItem.path} onClick={() => {setOpenIndex(null); setOpenSubIndex(null)}}>{subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link to={child.path} className="dropdown-link">
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
  );
};

export default Navbar;
