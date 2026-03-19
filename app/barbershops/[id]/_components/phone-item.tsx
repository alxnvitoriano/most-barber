"use client";

import { SmartphoneIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado com sucesso!");
  };

  return (
    <div className="bg-card flex items-center justify-between rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <SmartphoneIcon className="text-primary size-5" />
        <p className="text-sm font-bold">{phone}</p>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="h-8 rounded-lg px-3 text-xs font-bold"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
