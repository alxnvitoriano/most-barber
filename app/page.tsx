import Image from "next/image";
import Header from "./components/header";
import SearchInputs from "./components/search-inputs";
import banner from "../public/banner.png";
import BookingItem from "./components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItems from "./components/barbershop-items";

const Home = async () => {
  const recommendedBarbeshops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="space-y-4 p-5">
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
          barbershopName="Barbearia do Chef"
          barbershopImageUrl="https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png"
          date={new Date().toISOString()}
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbeshops.map((barbershop) => (
            <BarbershopItems key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItems key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
