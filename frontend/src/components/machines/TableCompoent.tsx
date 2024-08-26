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
import { AlertDialogDemo } from "./AlertDialogMachine";
import { DialogDemo } from "./DialogMachineDetails";
import { useState } from "react";
import { DialogEditMachine } from "./DialogEditMachine";
import machines from "@/data/machines";

export function MachinesTable() {
  const [initialMachines, setMachines] = useState(machines);

  const handleDelete = (serialNumber: string) => {
    setMachines((prevMachines) =>
      prevMachines.filter((machine) => machine.serialNumber !== serialNumber)
    );
  };

  return (
    <Table className="mt-20 z-0">
      <TableCaption>Uma lista das máquinas registradas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Nome da Máquina</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Modelo</TableHead>
          <TableHead>Data de Fabricação</TableHead>
          <TableHead>Número de Série</TableHead>
          <TableHead>Localização</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initialMachines.map((machine) => (
          <TableRow key={machine.serialNumber}>
            <TableCell className="font-medium">{machine.name}</TableCell>
            <TableCell>{machine.type}</TableCell>
            <TableCell>{machine.model}</TableCell>
            <TableCell>{machine.fabricationDate}</TableCell>
            <TableCell>{machine.serialNumber}</TableCell>
            <TableCell>{machine.location}</TableCell>
            <TableCell className="text-right">
              <DialogDemo machine={machine} />
              <DialogEditMachine machine={machine} />
              <AlertDialogDemo machine={machine} onDelete={handleDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7} className="text-right">
            Total de Máquinas: {initialMachines.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
