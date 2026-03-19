import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInputs = () => {
  return (
    <div className="flex items-center gap-2 rounded-full">
      <Input
        type="text"
        placeholder="Pesquise serviços ou barbearias"
        className="border-border rounded-full"
      />
      <Button variant="default" size="icon" className="rounded-full">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInputs;
