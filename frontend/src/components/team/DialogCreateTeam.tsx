import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectComponent } from "@/components/Select";

interface DialogCreateTeamProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (team: any) => void;
}

export function DialogCreateTeam({
  isOpen,
  onClose,
  onSave,
}: DialogCreateTeamProps) {
  const [name, setName] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [members, setMembers] = React.useState(1);
  const [status, setStatus] = React.useState("Ativa");

  const handleSave = () => {
    const newTeam = {
      name,
      department,
      members,
      status,
    };
    onSave(newTeam);
    onClose(); // Fecha o diálogo após salvar
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Time</DialogTitle>
          <DialogDescription>
            Preencha os detalhes para o novo time e clique em salvar.
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
            <SelectComponent
              selectedValue={status}
              onChange={(value: string) => setStatus(value)}
              label={"Status"}
              options={[
                { value: "Ativa", label: "Ativa" },
                { value: "Inativa", label: "Inativa" },
              ]}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
