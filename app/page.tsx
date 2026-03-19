import Image from "next/image";
import Header from "./components/header";
import SearchInputs from "./components/search-inputs";
import banner from "../public/banner.png";
import BookingItem from "./components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItems from "./components/barbershop-items";
import Footer from "./components/footer";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from "./components/ui/page";

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
      <PageContainer>
        <SearchInputs />
        <Image
          src={banner}
          alt="Agende Agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="Corte de cabelo"
            barbershopName="Barbearia do Chef"
            barbershopImageUrl="https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png"
            date={new Date().toISOString()}
          />
        </PageSection>
        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbeshops.map((barbershop) => (
              <BarbershopItems key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItems key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default Home;
