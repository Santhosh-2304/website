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
            { label: "Application Development", anchor: "application-development" },
            { label: "Managed IT Services" ,anchor: "managed-it-services"},
            { label: "Consulting & Support", anchor: "consulting-support" },
            { label: "Digital Transformation", anchor: "digital-transformation" },
            { label: "Cloud Solutions", anchor: "cloud-solutions" },
            { label: "Cybersecurity & Digital Forensics", anchor: "cybersecurity-digital-forensics" },
          ],
          singlePage: true
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

  const handleNavigate = (basePath, hash) => {
    onNavigate();
    const full = hash ? `${basePath}#${hash}` : basePath;

    // if navigating to section on SAME page
    if (location.pathname === basePath && hash) {
      navigate(full);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 70);
    } else {
      navigate(full);
    }
  };

  
  return (
    <>
      
      <button
        onClick={() => onToggle()}
        className={`relative z-[999] ${isOpen ? "bg-gray-400 px-1 md:px-0 rounded-md " : ""}`}
      >
        <i className={`fa-solid fa-grip text-xl mt-1  ${isOpen ? "text-white":""}`}></i>
      </button>

      
      <aside
        ref={panelRef}
        className={`fixed right-0 z-[999] bg-gradient-to-r from-blue-200 to-gray-50 shadow-2xl
         w-[237px] transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="h-full flex flex-col">
          {/* header inside panel */}
        <div className="h-full overflow-y-auto md:px-5 md:py-6 px-3 py-4">
          <ul className="space-y-6">
            {menuData.map((parent, pIdx) => (
              <li key={pIdx}>
                {/* Parent */}
                <div
                  className="text-gray-900 font-semibold md:text-lg cursor-pointer hover:text-blue-600 "
                  onClick={() =>
                    parent.singlePage
                      ? handleNavigate(parent.path, parent.defaultSection || "")
                      : handleNavigate(parent.path)
                  }
                >
                  {parent.label}
                </div>

                {parent.children && (
                  <ul className="mt-2 ml-3 space-y-2">
                    {parent.children.map((child, cIdx) => {
                      const childHasChildren = child.children?.length > 0;

                      const key = slug(parent.label + "-" + child.label);

                      const isOpen = openChild[key];

                      const isAnchor =
                        child.anchor || parent.singlePage || child.singlePage;

                      const anchorId = child.anchor || slug(child.label);

                      return (
                        <li key={cIdx}>

                          {/* CHILD ROW */}
                          <div className="flex ">
                            {/* + or - icon */}
                            {childHasChildren ? (
                              <button
                                className="text-xl font-bold text-gray-700 cursor-pointer hover:text-blue-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenChild((prev) => ({
                                    ...prev,
                                    [key]: !prev[key],
                                  }));
                                }}
                              >
                                {isOpen ? "–" : "+"}
                              </button>
                            ) : 
                            <span className="w-3"></span>}
                            <button
                              className="text-gray-700 text-sm ml-2 hover:text-blue-600 text-left cursor-pointer"
                              onClick={() =>
                                handleNavigate(
                                  child.path || parent.path,
                                  isAnchor ? anchorId : ""
                                )
                              }
                            >
                               {child.label}
                            </button>

                            
                          </div>

                          {/* GRANDCHILDREN (collapsible) */}
                          {childHasChildren && isOpen && (
                            <ul className="ml-6 mt-2 space-y-1">
                              {child.children.map((sub, sIdx) => {
                                const isSubAnchor =
                                  sub.anchor || child.singlePage || parent.singlePage;

                                const subAnchorId = sub.anchor || slug(sub.label);

                                return (
                                  <li key={sIdx}>
                                    <button
                                      className="text-gray-600 text-sm hover:text-blue-600 text-left"
                                      onClick={() =>
                                        handleNavigate(
                                          sub.path || child.path || parent.path,
                                          isSubAnchor ? subAnchorId : ""
                                        )
                                      }
                                    >
                                      - {sub.label}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

              </li>
            ))}
          </ul>
            </div>
        </div>
      </aside>
    </>
  );
}
