import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeMenu = () => setOpen(false);
  const [openChild, setOpenChild] = useState({});
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
          {label:"Mobile App", anchor: "mobile-app-development"},
          {label:"Web App", anchor: "desktop-app-development"},
          {label:"Enterprise App", anchor: "enterprise-app-development"},
          {label:"IOT App", anchor: "iot-app-development"},
          {label:"Cloud Native App", anchor: "cloud-app-development"},
        ]
      },
      {label:"Managed IT services", path:"/it",
        children:[
          {label:"Custom Software/Cloud Integrations", anchor: "software-cloud-integrations"},
          {label:"Micro Services", anchor: "microservices"},
          {label:"Test Automations", anchor: "testing"},
          {label:"AI/ML Agent Development", anchor: "ai-ml"},
          {label:"Software Support / Maintenance / Implementation", anchor: "software-support"}
        ]
      }
    ],
    path: "/software-technology-solutions",
    singlePage: true },
  
    { label: "Technology Consulting Services",
    children:[
      {label:"Software Architecture Design",anchor:"design-architecture"},
      {label:"Performance Optimization & Refactoring", anchor:"performance"},
      {label:"Security Audits & Compliance", anchor:"security"},
      {label:"Process Automation & Digitization", anchor:"process-automation"},
      {label:"System Integration & API Consulting", anchor:"api"},
      {label:"Digital Marketing", anchor:"digital-marketing"}
    ],
    path: "/consulting",
  },
];

  const HEADER_HEIGHT = 197;
  // slugify helper
  const slug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  // handle navigation
  const handleNavigate = (basePath, hash = "") => {
    closeMenu();

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
        onClick={() => setOpen((s) => !s)}
        aria-label="Menu"
        className="relative z-[999] ml-4 mr-6 flex items-center cursor-pointer"
      >
        <i className={`fa-solid fa-bars text-2xl ${open ? "text-blue-600":""}`}></i>
      </button>

      {/* Side panel */}
      <aside
        ref={panelRef}
        className={`fixed left-0 z-[999] bg-gradient-to-r from-blue-200 to-gray-50 shadow-2xl w-[280px] 
        transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          top: HEADER_HEIGHT + "px",
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <div className="h-full flex flex-col">
          {/* header inside panel */}
        <div className="h-full overflow-y-auto px-5 py-6">
          <ul className="space-y-6">
            {menuData.map((parent, pIdx) => (
              <li key={pIdx}>
                {/* Parent */}
                <div
                  className="text-gray-900 font-semibold text-lg cursor-pointer hover:text-blue-600 "
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
                              className="text-gray-700 text-base ml-2 hover:text-blue-600 text-left cursor-pointer"
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
