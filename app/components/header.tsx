"use client";

import SidebarMenu from "./sidebar-menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <h1 className="text-2xl font-bold">Barbearia</h1>
      <div className="flex items-center gap-2">
        <SidebarMenu />
      </div>
    </header>
  );
};

export default Header;
