import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BarbershopHeader from "./_components/barbershop-header";
import {
  PageContainer,
  PageSection,
  PageSectionTitle,
} from "@/app/components/ui/page";
import ServiceItem from "./_components/service-item";
import PhoneItem from "./_components/phone-item";
import { MapPinIcon, StarIcon } from "lucide-react";

interface BarbershopPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BarbershopPage = async (props: BarbershopPageProps) => {
  const { id } = await props.params;

  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id,
    },
    include: {
      services: {
        include: {
          barbershop: true,
        },
      },
    },
  });

  if (!barbershop) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* HEADER */}
      <BarbershopHeader barbershopImageUrl={barbershop.imageUrl} />

      <PageContainer className="pt-0">
        {/* INFO */}
        <div className="border-border space-y-3 border-b pb-6">
          <h1 className="text-foreground text-xl font-bold">
            {barbershop.name}
          </h1>
          <div className="flex items-center gap-2">
            <MapPinIcon className="text-primary size-4" />
            <p className="text-muted-foreground text-sm">
              {barbershop.address}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="fill-primary text-primary size-4" />
            <p className="text-muted-foreground text-sm">
              5,0 (499 avaliações)
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <PageSection>
          <PageSectionTitle>SOBRE NÓS</PageSectionTitle>
          <p className="text-foreground text-sm leading-relaxed">
            {barbershop.description}
          </p>
        </PageSection>

        {/* SERVICES */}
        <PageSection>
          <PageSectionTitle>SERVIÇOS</PageSectionTitle>
          <div className="flex flex-col gap-4">
            {barbershop.services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </PageSection>

        {/* CONTACTS */}
        <PageSection>
          <PageSectionTitle>CONTATO</PageSectionTitle>
          <div className="flex flex-col gap-3">
            {barbershop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </PageSection>
      </PageContainer>
    </div>
  );
};

export default BarbershopPage;
