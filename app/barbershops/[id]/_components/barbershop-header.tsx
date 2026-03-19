"use client";

import { Button } from "@/app/components/ui/button";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopHeaderProps {
  barbershopImageUrl: string;
}

const BarbershopHeader = ({ barbershopImageUrl }: BarbershopHeaderProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="relative h-[250px] w-full">
      <Image
        src={barbershopImageUrl}
        fill
        className="object-cover"
        alt="Barbearia"
      />

      <div className="absolute left-0 top-0 flex w-full items-center justify-between p-5">
        <Button
          size="icon"
          variant="secondary"
          className="size-10"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon className="size-5" />
        </Button>

        <Button size="icon" variant="secondary" className="size-10">
          <MenuIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default BarbershopHeader;
