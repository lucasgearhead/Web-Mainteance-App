"use client";

import { useState } from "react";
import { TeamsTable } from "@/components/team/TeamTable"; // Corrigi o caminho para o componente correto
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogCreateTeam } from "@/components/team/DialogCreateTeam"; // Importe o componente para criar novas equipes
import { TeamFilters } from "@/components/team/TeamFilters";

export default function Equipes() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filtrar as máquinas com base no searchQuery
  };

  const handleNewTeam = () => {
    setIsDialogOpen(true); // Abre o diálogo para criar uma nova equipe
  };

  const handleSaveTeam = (newTeam: any) => {
    // Lógica para adicionar a nova equipe à lista
    console.log("Nova equipe salva:", newTeam);
    setIsDialogOpen(false); // Fecha o diálogo após salvar
  };

  return (
    <div className="p-10 justify-end flex flex-col gap-5">
      <TeamFilters onSearch={handleSearch} handleNewTeam={handleNewTeam} />
      <TeamsTable />

      <DialogCreateTeam
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveTeam}
      />
    </div>
  );
}
