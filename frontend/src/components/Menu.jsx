import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function HamburgerMenu({ isOpen, onToggle, onNavigate }) {
  
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [openChild, setOpenChild] = useState({});
  const [headerHeight, setHeaderHeight] = useState(0);
  const menuData = [
  {
    label: "Software training",
    path: "/software-training-services",
    children: [
      {
        label: "Full Stack",
        path: "/fullstack",
        children: [
          {
            label: "MERN",
            anchor: "mern",
          },
          {
            label: "MEAN",
            anchor: "mean",
          },
          {
            label: "Python",
            anchor: "python",
          },
          {
            label: "Java",
            anchor: "java",
          },
          {
            label: ".NET",
            anchor: "dotnet",
          },
        ],
        singlePage: true
      },
      {
        label: "IoT",
        children:[
          {label:"Embedded Systems"},
          {label:"Rasberry Pi / Arduino Kits"}
        ]
      },
      {
        label: "AI and ML",
        path: "/research-development",
      },
    ],
  },

  { label: "Software Development",
    children:[
      {label:"App development", path:"/app-development",
        children:[
          
          {label:"Web App", anchor: "desktop-app-development"},
          {label:"Enterprise App", anchor: "enterprise-app-development"},
          {label:"Mobile App", anchor: "mobile-app-development"},
          {label:"Cloud Native App", anchor: "cloud-app-development"},
          {label:"IOT App", anchor: "iot-app-development"},
        ]
      },
      {label:"Managed IT services", path:"/it",
        children:[
          {label:"Custom Software/Cloud Integrations", anchor: "software-cloud-integrations"},
          {label:"Micro Services", anchor: "microservices"},
          {label:"DevOps & Automation", anchor: "devops-automation"},
          {label:"Test Automations", anchor: "testing"},
          {label:"AI/ML Agent Development", anchor: "ai-ml"},
          {label:"Software Support / Maintenance / Implementation", anchor: "software-support"}
        ]
      }
    ],
    path: "/software-technology-solutions",
    singlePage: true },
  
    { label: "Technology Consulting Services",
    
    path: "/consulting",
  },
];

 
  // slugify helper

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

  // handle navigation
  const handleNavigate = (basePath, hash = "") => {
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
        aria-label="Menu"
        className={`relative z-[999] md:ml-4 md:mr-9 ml-1 flex items-center cursor-pointer md:bg-transparent ${isOpen ? "bg-gray-400 md:px-0 px-1 rounded-md" : ""}`}
      >
        <i className={`fa-solid fa-bars md:text-2xl text-xl p-1 md:p-0 ${isOpen ? "md:text-blue-600 text-white":""}`}></i>
      </button>

      {/* Side panel */}
      <aside
        ref={panelRef}
        className={`sidebar fixed left-0 z-[999] bg-gradient-to-r from-blue-200 to-gray-50 shadow-2xl md:w-[280px] w-[220px]
        transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
