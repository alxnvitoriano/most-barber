import Image from "next/image";
import Header from "./components/header";
import SearchInputs from "./components/search-inputs";
import banner from "../public/banner.png";
import BookingItem from "./components/booking-item";

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

        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do Alan"
          barbershopImageUrl="https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png"
          date={new Date()}
        />
      </div>
    </div>
  );
};

export default Home;
