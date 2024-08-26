"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { AlertDialogTeam } from "./AlertDialogTeam";
import { DialogTeamDetails } from "./DialogTeamDetails";
import { DialogEditTeam } from "./DialogEditTeam";
import teams from "@/data/teams";

export function TeamsTable() {
  const [initialTeams, setTeams] = useState(teams);

  const handleDelete = (teamName: string) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.name !== teamName));
  };

  const handleSave = (updatedTeam: any) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.name === updatedTeam.name ? updatedTeam : team
      )
    );
  };

  return (
    <Table className="mt-20 z-0">
      <TableCaption>A list of maintenance teams.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Nome da Equipe</TableHead>
          <TableHead>Setor/Departamento</TableHead>
          <TableHead>Número de Membros</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initialTeams.map((team) => (
          <TableRow key={team.name}>
            <TableCell className="font-medium">{team.name}</TableCell>
            <TableCell>{team.department}</TableCell>
            <TableCell>{team.members}</TableCell>
            <TableCell>{team.status}</TableCell>
            <TableCell className="text-right">
              <DialogTeamDetails team={team} />
              <DialogEditTeam team={team} onSave={handleSave} />
              <AlertDialogTeam team={team} onDelete={handleDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="text-right">
            Total Equipes: {initialTeams.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
