// src/components/MaintenanceTable.tsx

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
import { Button } from "@/components/ui/button";

interface Maintenance {
  id: string;
  title: string;
  equipment: string;
  dateRequested: string;
  priority: string;
  status: string;
  sector: string;
  team: string;
  comments: string;
}

interface MaintenanceTableProps {
  maintenances: Maintenance[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function MaintenanceTable({
  maintenances,
  onView,
  onEdit,
  onDelete,
}: MaintenanceTableProps) {
  return (
    <Table className="mt-20 z-0">
      <TableCaption>Gerenciamento de Manutenções</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Equipamento</TableHead>
          <TableHead>Data de Solicitação</TableHead>
          <TableHead>Prioridade</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Setor</TableHead>
          <TableHead>Equipe</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {maintenances.map((maintenance) => (
          <TableRow key={maintenance.id}>
            <TableCell className="font-medium">{maintenance.id}</TableCell>
            <TableCell>{maintenance.title}</TableCell>
            <TableCell>{maintenance.equipment}</TableCell>
            <TableCell>{maintenance.dateRequested}</TableCell>
            <TableCell>{maintenance.priority}</TableCell>
            <TableCell>{maintenance.status}</TableCell>
            <TableCell>{maintenance.sector}</TableCell>
            <TableCell>{maintenance.team}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" onClick={() => onView(maintenance.id)}>
                Visualizar
              </Button>
              <Button variant="outline" onClick={() => onEdit(maintenance.id)}>
                Editar
              </Button>
              <Button
                variant="outline"
                className="text-red-500 hover:underline"
                onClick={() => onDelete(maintenance.id)}
              >
                Deletar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={9} className="text-right">
            Total de Manutenções: {maintenances.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
