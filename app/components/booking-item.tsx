import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingItemProps {
  date: string;
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
}

const BookingItem = ({
  serviceName,
  date,
  barbershopImageUrl,
  barbershopName,
}: BookingItemProps) => {
  return (
    <Card className="flex w-full min-w-full flex-row items-center justify-between p-0">
      {/* ESQUERDA */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <Badge>Confirmado</Badge>

        <div className="flex flex-col gap-2">
          <p className="font-bold">{serviceName}</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={barbershopImageUrl} />
            </Avatar>
            <p className="text-muted-foreground text-xs">{barbershopName}</p>
          </div>
        </div>
      </div>

      {/* DIREITA */}
      <div className="flex h-full flex-col items-center justify-center border-l p-4 py-3">
        <p className="text-xs capitalize">
          {new Date(date).toLocaleDateString("pt-BR", { month: "long" })}
        </p>
        <p className="text-xs capitalize">
          {new Date(date).toLocaleDateString("pt-BR", { day: "2-digit" })}
        </p>
        <p className="text-xs capitalize">
          {new Date(date).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
