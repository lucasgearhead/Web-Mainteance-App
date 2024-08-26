"use client";

import { MachinesTable } from "@/components/machines/TableCompoent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DialogCreateMachine } from "@/components/machines/DialogCreateMachine";
import { MachineFilters } from "@/components/machines/MachineFilters";

export default function Maquinas() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNewMachine = () => {
    setIsDialogOpen(true); // Abre o diálogo para criar uma nova máquina
  };

  const handleSaveMachine = (newMachine: any) => {
    // Lógica para adicionar a nova máquina à lista
    console.log("New machine saved:", newMachine);
    setIsDialogOpen(false); // Fecha o diálogo após salvar
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filtrar as máquinas com base no searchQuery
  };

  return (
    <div className="p-10 justify-end flex flex-col gap-5">
      <MachineFilters
        onSearch={handleSearch}
        handleNewMachine={handleNewMachine}
      />
      <MachinesTable />
      <DialogCreateMachine
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveMachine}
      />
    </div>
  );
}
