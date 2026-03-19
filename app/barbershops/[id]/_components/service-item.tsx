"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { BarbershopService } from "@/app/generated/prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="min-w-[350px] rounded-2xl border border-[#F1F1F1] bg-[#FAFAFA] p-3">
      <CardContent className="flex items-center gap-3 p-0">
        {/* IMAGE */}
        <div className="relative h-[110px] min-h-[110px] w-[110px] min-w-[110px]">
          <Image
            src={service.imageUrl}
            fill
            alt={service.name}
            className="rounded-xl object-cover"
          />
        </div>

        {/* INFO */}
        <div className="flex h-[110px] w-full flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm leading-[1.4em] font-bold text-[#000000]">
              {service.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-[1.4em] text-[#656565]">
              {service.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm leading-[1.4em] font-bold text-[#000000]">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(service.priceInCents / 10)}
            </p>

            <Button className="h-9 rounded-full bg-[#305C3A] px-4 py-2 text-sm font-bold text-white hover:bg-[#305C3A]/90">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
