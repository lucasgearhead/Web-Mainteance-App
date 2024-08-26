"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function NavComponent() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/maquinas", label: "Máquinas" },
    { href: "/manutencao", label: "Manutenções" },
    { href: "/equipes", label: "Equipes" },
    { href: "/pecasemateriais", label: "Peças e Materiais" },
  ];

  return (
    <div className="w-full h-10 flex justify-between px-20 py-8 items-center fixed z-50 bg-background">
      <h1>RECARO</h1>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "text-blue-600" : ""}
          >
            {item.label}
          </a>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}
