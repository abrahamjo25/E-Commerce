"use client";
import { useState } from "react";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col bg-white text-black  justify-between font-sans">
      <div className="flex flex-col">
        <Header setSidebarToggle={setSidebarToggle} />
        <div className="md:flex gap-2">
          <Sidebar sidebarToggle={sidebarToggle} />
          <Main sidebarToggle={sidebarToggle} />
        </div>
      </div>
    </main>
  );
}
