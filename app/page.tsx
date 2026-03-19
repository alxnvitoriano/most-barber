import Image from "next/image";
import Header from "./components/header";
import SearchInputs from "./components/search-inputs";
import banner from "../public/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInputs />
        <Image
          src={banner}
          alt="Agende Agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Home;
