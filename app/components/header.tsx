import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <h1 className="text-2xl font-bold">Barbearia</h1>
      <Button variant="outline">
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
