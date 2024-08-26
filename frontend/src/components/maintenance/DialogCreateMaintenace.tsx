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
import { DatePickerDemo } from "@/components/DatePicker";
import { SelectComponent } from "@/components/Select";

export function DialogCreateMaintenance({ isOpen, onClose, onSave }: any) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [equipment, setEquipment] = React.useState("");
  const [dateRequested, setDateRequested] = React.useState<Date | undefined>(
    undefined
  );
  const [priority, setPriority] = React.useState("low");
  const [status, setStatus] = React.useState("pending");
  const [responsible, setResponsible] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [comments, setComments] = React.useState("");

  const handleSave = () => {
    const newMaintenance = {
      title,
      description,
      equipment,
      dateRequested: dateRequested?.toISOString().split("T")[0] || "",
      priority,
      status,
      responsible,
      team,
      comments,
    };
    onSave(newMaintenance);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Manutenção</DialogTitle>
          <DialogDescription>
            Preencha as informações da solicitação de manutenção.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Título
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="equipment" className="text-right">
              Equipamento
            </Label>
            <Input
              id="equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dateRequested" className="text-right">
              Data de Solicitação
            </Label>
            <div className="col-span-3">
              <DatePickerDemo date={dateRequested} setDate={setDateRequested} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">
              Prioridade
            </Label>
            <SelectComponent
              selectedValue={priority}
              onChange={(value: string) => setPriority(value)}
              label=""
              options={[
                { value: "low", label: "Baixa" },
                { value: "medium", label: "Média" },
                { value: "high", label: "Alta" },
                { value: "critical", label: "Crítica" },
              ]}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <SelectComponent
              selectedValue={status}
              onChange={(value: string) => setStatus(value)}
              label=""
              options={[
                { value: "pending", label: "Pendente" },
                { value: "in-progress", label: "Em Andamento" },
                { value: "completed", label: "Concluída" },
                { value: "canceled", label: "Cancelada" },
              ]}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="responsible" className="text-right">
              Responsável
            </Label>
            <Input
              id="responsible"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="team" className="text-right">
              Equipe de Manutenção
            </Label>
            <Input
              id="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comments" className="text-right">
              Comentários
            </Label>
            <Input
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="default" onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
