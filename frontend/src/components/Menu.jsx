import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeMenu = () => setOpen(false);
  const menuData = [
  {
    label: "Home",
    path: "/",
    singlePage: true,
    defaultSection: "what-we-do",
    children: [
      { label: "What We Do", anchor: "what-we-do" },
      { label: "Why Choose Us", anchor: "why-choose-us" },
      { label: "Client Reviews", anchor: "client-reviews" },
      { label: "Our Mission", anchor: "our-mission" },
    ],
  },

  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Software Training Services",
        path: "/software-training-services",
        children: [
          {
            label: "Training & Talent Management",
            path: "/training-talent",
          },
          {
            label: "Academic Training Programs",
            path: "/academic-training",
          },
          {
            label: "Corporate Training",
            path: "/corporate-training",
          },
        ],
      },

      {
        label: "Software & Technology Solutions",
        path: "/software-technology-solutions",
        singlePage: true,
        children: [
          { label: "Application Development", anchor: "application-development" },
          { label: "Managed IT Services", anchor: "managed-it-services" },
          { label: "Consulting & Support", anchor: "consulting-support" },
          { label: "Digital Transformation", anchor: "digital-transformation" },
          { label: "Cloud Solutions", anchor: "cloud-solutions" },
          { label: "Cybersecurity & Digital Forensics", anchor: "cybersecurity-digital-forensics" },
        ],
      },

      {
        label: "Research & Development",
        path: "/research-development",
      },
    ],
  },

  { label: "Careers", path: "/careers" },
  { label: "About Us", path: "/aboutus" },
  { label: "Contact", path: "/contact" },
];

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
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="z-50 ml-4 mr-8 w-10 h-10 flex items-center justify-center"
      >
        <i className="fa-solid fa-bars text-2xl cursor-pointer hover:text-blue-500"></i>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Side panel */}
      <aside
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-[420px] bg-gradient-to-r from-blue-100 to-purple-50 z-50 shadow-2xl transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="h-full flex flex-col">
          {/* header inside panel */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
              <div>
                <div className="text-lg font-semibold">INNOVATIONAL METTLE MINDS</div>
              </div>
            </div>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-300 cursor-pointer"
            >
              ✕
            </button>
          </div>
        <div className="h-full overflow-y-auto px-6 py-6">

          <ul className="space-y-6">
            {menuData.map((parent, pIdx) => (
              <li key={pIdx}>
                {/* Parent */}
                <div
                  className="text-gray-900 font-semibold text-lg cursor-pointer hover:text-blue-600"
                  onClick={() =>
                    parent.singlePage
                      ? handleNavigate(parent.path, parent.defaultSection || "")
                      : handleNavigate(parent.path)
                  }
                >
                  {parent.label}
                </div>

                {/* Children */}
                {parent.children && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {parent.children.map((child, cIdx) => {
                      const childHasOwnChildren = child.children?.length > 0;

                      const isAnchor =
                        child.anchor || parent.singlePage || child.singlePage;

                      const anchorId =
                        child.anchor || slug(child.label);

                      return (
                        <li key={cIdx}>
                          {/* Child row */}
                          <button
                            className="text-gray-700 text-base hover:text-blue-600 text-left"
                            onClick={() =>
                              handleNavigate(
                                child.path || parent.path,
                                isAnchor ? anchorId : ""
                              )
                            }
                          >
                            • {child.label}
                          </button>

                          {/* Grandchildren */}
                          {childHasOwnChildren && (
                            <ul className="ml-6 mt-1 space-y-1">
                              {child.children.map((sub, sIdx) => {
                                const isSubAnchor =
                                  sub.anchor ||
                                  child.singlePage ||
                                  parent.singlePage;

                                const subAnchorId =
                                  sub.anchor || slug(sub.label);

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
