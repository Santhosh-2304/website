import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ServiceMenu({ isOpen, onToggle, onNavigate }) {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [openChild, setOpenChild] = useState({});
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const ArrowIcon = ({ open }) => (
    <svg
      width="15"
      height="15"
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
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );


  const menuData = [
    { label: "Home", path: "/" },

    {
      label: "Services",
      path: "/services",
      children: [
        {
          label: "Software Training Services",
          path: "/software-training-services",
          children: [
            { label: "Training and Talent management", path: "/training-talent" },
            { label: "Academic Training Programs", path: "/academic-training" },
            { label: "Corporate Training", path: "/corporate-training" },
          ],
        },
        {
          label: "Software and Technology Solutions",
          path: "/software-technology-solutions",
          children: [
            { label: "Application Development" },
            { label: "Managed IT Services" },
            { label: "Consulting & Support" },
            { label: "Digital Transformation" },
            { label: "Cloud Solutions" },
            { label: "Cybersecurity & Digital Forensics" },
          ],
        },
        {
          label: "Research and Development",
          path: "/research-development",
        },
      ],
    },

    { label: "Careers", path: "/careers" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contact" },
  ];

  
  useEffect(() => {
    const header = document.getElementById("header");

    const updateHeight = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  
  const slug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleNavigate = (path) => {
    onNavigate();
    if (path && location.pathname !== path) navigate(path);
  };

  
  return (
    <>
      
      <button
        onClick={() => onToggle()}
        className="relative z-[999] md:mr-4 mr-2 "
      >
        <i className={`fa-solid fa-grip text-xl mt-1 ${isOpen ? "text-blue-600":""}`}></i>
      </button>

      
      <aside
        ref={panelRef}
        className={`fixed right-0 z-[999] bg-gradient-to-r from-blue-200 to-gray-50 shadow-2xl
        md:w-[280px] w-[170px] transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="h-full overflow-y-auto px-5 py-6">
          <ul className="space-y-6">

            {menuData.map((parent, pIdx) => {
              const parentKey = slug(parent.label);
              const isParentOpen = openChild[parentKey];

              return (
                <li key={pIdx}>
                 
                  <div className="flex items-center">
                    
                    <button
                      className="text-gray-900 font-medium text-left hover:text-blue-600 mr-2"
                      onClick={() => handleNavigate(parent.path)}
                    >
                      {parent.label}
                    </button>

                    
                    {parent.children && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenChild((prev) => ({
                            ...prev,
                            [parentKey]: !prev[parentKey],
                          }));
                        }}
                      >
                        <ArrowIcon open={isParentOpen} />
                      </button>
                    )}
                  </div>

                  
                  {parent.children && (
                    <ul
                      className={`ml-3 mt-2 space-y-2 overflow-hidden transition-all duration-300
                      ${isParentOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {parent.children.map((child, cIdx) => {
                        const childKey = slug(parent.label + "-" + child.label);
                        const isChildOpen = openChild[childKey];
                        const hasGrandChildren = child.children?.length > 0;

                        return (
                          <li key={cIdx}>
                            
                            <div className="flex items-center">
                              
                              {hasGrandChildren ? (
                                <button
                                  className="text-lg font-bold w-4"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenChild((prev) => ({
                                      ...prev,
                                      [childKey]: !prev[childKey],
                                    }));
                                  }}
                                >
                                  {isChildOpen ? "–" : "+"}
                                </button>
                              ) : (
                                <span className="w-4" />
                              )}

                              
                              <button
                                className="ml-2 text-gray-700 text-sm hover:text-blue-600 text-left"
                                onClick={() => handleNavigate(child.path)}
                              >
                                {child.label}
                              </button>
                            </div>

                           
                            {hasGrandChildren && isChildOpen && (
                              <ul className="ml-6 mt-2 space-y-1">
                                {child.children.map((sub, sIdx) => (
                                  <li key={sIdx}>
                                    <button
                                      className="text-gray-600 text-sm hover:text-blue-600 text-left"
                                      onClick={() => handleNavigate(sub.path)}
                                    >
                                      - {sub.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}

          </ul>
        </div>
      </aside>
    </>
  );
}
