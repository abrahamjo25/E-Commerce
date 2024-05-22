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
const Sidebar = ({ sidebarToggle }: SidebarProps) => {
  return (
    <div
      className={`h-screen w-80 border rounded-md shadow-md   sm:static fixed ${
        !sidebarToggle ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="mt-7 ml-4">
        <div className="px-4 grid gap-3">
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-green-100">
            <LayoutDashboard className="h-5 w-5 " />
            <p className="text-xl">Dashbaord</p>
          </h2>
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-green-100">
            <Grape className="h-5 w-5 " />
            <p className="text-xl">Grapes</p>
          </h2>
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-green-100">
            <BedSingle className="h-5 w-5 " />
            <p className="text-xl">Furniture</p>
          </h2>
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-green-100">
            <BriefcaseBusiness className="h-5 w-5 " />
            <p className="text-xl">Health and Beauty</p>
          </h2>
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-green-100">
            <Medal className="h-5 w-5 " />
            <p className="text-xl">Sports and Fashion</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
