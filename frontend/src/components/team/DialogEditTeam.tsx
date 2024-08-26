import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectComponent } from "@/components/Select";

// Interface para as props do DialogEditTeam
interface DialogEditTeamProps {
  team: {
    name: string;
    department: string;
    members: number;
    status: string;
  };
  onSave: (updatedTeam: any) => void;
}

export function DialogEditTeam({ team, onSave }: DialogEditTeamProps) {
  const [name, setName] = React.useState(team.name);
  const [department, setDepartment] = React.useState(team.department);
  const [members, setMembers] = React.useState(team.members);
  const [status, setStatus] = React.useState(team.status);

  const handleSave = () => {
    const updatedTeam = {
      ...team,
      name,
      department,
      members,
      status,
    };
    onSave(updatedTeam);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Time</DialogTitle>
          <DialogDescription>
            Faça as alterações nos detalhes do time aqui. Clique em salvar
            quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="department" className="text-right">
              Departamento
            </Label>
            <Input
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="members" className="text-right">
              Número de Membros
            </Label>
            <Input
              id="members"
              type="number"
              value={members}
              onChange={(e) => setMembers(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <SelectComponent
                selectedValue={status}
                onChange={(value: string) => setStatus(value)}
                label={"Status"}
                options={[
                  { value: "ativa", label: "Ativa" },
                  { value: "inativa", label: "Inativa" },
                ]}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Salvar alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
