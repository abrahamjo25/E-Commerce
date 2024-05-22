"use client";
import {
  BedSingle,
  BriefcaseBusiness,
  Grape,
  LayoutDashboard,
  Medal,
} from "lucide-react";
import React, { useState } from "react";


interface SidebarProps {
  sidebarToggle: boolean;
}

/**
 * Creates a sidebar component that can be toggled visible or hidden.
 * @param sidebarToggle - A boolean that determines whether the sidebar is visible (true) or hidden (false).
 * @returns JSX element representing the sidebar with conditional visibility and interactive navigation items.
 */
const Sidebar: React.FC<SidebarProps> = ({ sidebarToggle }) => {
  return (
    <div
      className={`h-screen w-80 border rounded-md shadow-md sm:static fixed ${
        !sidebarToggle ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="mt-7 ml-4">
        <div className="px-4 grid gap-3">
          {[
            {
              icon: <LayoutDashboard className="h-5 w-5" />,
              label: "Dashboard",
            },
            { icon: <Grape className="h-5 w-5" />, label: "Grapes" },
            { icon: <BedSingle className="h-5 w-5" />, label: "Furniture" },
            {
              icon: <BriefcaseBusiness className="h-5 w-5" />,
              label: "Health and Beauty",
            },
            {
              icon: <Medal className="h-5 w-5" />,
              label: "Sports and Fashion",
            },
          ].map((item, index) => (
            <h2
              key={index}
              className="flex gap-2 items-center cursor-pointer hover:bg-green-100"
            >
              {item.icon}
              <p className="text-xl">{item.label}</p>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
