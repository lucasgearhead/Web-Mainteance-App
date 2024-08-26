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
import { DatePickerDemo } from "@/components/DatePicker";
import { SelectComponent } from "@/components/Select";

export function DialogCreateMachine({ isOpen, onClose, onSave }: any) {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [model, setModel] = React.useState("");
  const [fabricationDate, setFabricationDate] = React.useState<
    Date | undefined
  >(undefined);
  const [serialNumber, setSerialNumber] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [status, setStatus] = React.useState("Running");

  const handleSave = () => {
    const newMachine = {
      name,
      type,
      model,
      fabricationDate: fabricationDate?.toISOString().split("T")[0] || "",
      serialNumber,
      location,
      status,
    };
    onSave(newMachine);
    onClose(); // Fecha o diálogo após salvar
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Nova Máquina</DialogTitle>
          <DialogDescription>
            Preencha os detalhes da nova máquina e clique em salvar.
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
            <Label htmlFor="type" className="text-right">
              Tipo
            </Label>
            <Input
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model" className="text-right">
              Modelo
            </Label>
            <Input
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fabricationDate" className="text-right">
              Data de Fabricação
            </Label>
            <div className="col-span-3">
              <DatePickerDemo
                date={fabricationDate}
                setDate={setFabricationDate}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="serialNumber" className="text-right">
              Número de Série
            </Label>
            <Input
              id="serialNumber"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Localização
            </Label>
            <div className="col-span-3">
              <SelectComponent
                selectedValue={location}
                onChange={(value: string) => setLocation(value)}
                label={""}
                options={[
                  { value: "factory1", label: "Fábrica 1" },
                  { value: "factory2", label: "Fábrica 2" },
                  { value: "factory3", label: "Fábrica 3" },
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <SelectComponent
                selectedValue={status}
                onChange={(value: string) => setStatus(value)}
                label={""}
                options={[
                  { value: "running", label: "Em Funcionamento" },
                  { value: "broken", label: "Quebrada" },
                  { value: "maintenance", label: "Manutenção" },
                ]}
              />
            </div>
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
