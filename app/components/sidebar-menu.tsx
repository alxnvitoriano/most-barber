"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";

const SidebarMenu = () => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const categories = [
    "Cabelo",
    "Barba",
    "Acabamento",
    "Sombrancelha",
    "Massagem",
    "Hidratação",
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[370px] p-0 flex flex-col gap-6"
        showCloseButton={true}
      >
        <SheetHeader className="px-5 py-6 flex-row items-center justify-between space-y-0">
          <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="h-px bg-border mx-0" />

        <div className="px-5 flex items-center justify-between">
          {mounted && session ? (
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-none">
                <AvatarImage
                  src={session.user.image ?? ""}
                  alt={session.user.name}
                />
                <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-base font-semibold">
                  {session.user.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {session.user.email}
                </span>
              </div>
            </div>
          ) : mounted ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-base font-semibold">
                Olá. Faça seu login!
              </span>
              <Button
                onClick={handleLogin}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-11 gap-3 font-semibold text-sm"
              >
                Login
                <LogInIcon className="h-4 w-4" />
              </Button>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col px-0">
          <SheetClose asChild>
            <Link
              href="/"
              className="flex items-center gap-3 px-5 py-3 hover:bg-accent transition-colors"
            >
              <HomeIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Início</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/bookings"
              className="flex items-center gap-3 px-5 py-3 hover:bg-accent transition-colors"
            >
              <CalendarDaysIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Agendamentos</span>
            </Link>
          </SheetClose>
        </div>

        <div className="h-px bg-border mx-0" />

        <div className="flex flex-col px-0 gap-1">
          {categories.map((category) => (
            <button
              key={category}
              className="flex items-center gap-3 px-5 py-3 hover:bg-accent transition-colors text-left"
            >
              <span className="text-sm font-medium">{category}</span>
            </button>
          ))}
        </div>

        <div className="h-px bg-border mx-0" />

        <div className="px-0 mt-auto pb-6">
          {mounted && session && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-5 py-3 hover:bg-accent transition-colors w-full text-left group"
            >
              <LogOutIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                Sair da conta
              </span>
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMenu;
