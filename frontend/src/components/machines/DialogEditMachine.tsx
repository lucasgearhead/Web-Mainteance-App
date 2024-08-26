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

export function DialogEditMachine({ machine, onSave }: any) {
  const [name, setName] = React.useState(machine.name);
  const [type, setType] = React.useState(machine.type);
  const [model, setModel] = React.useState(machine.model);
  const [fabricationDate, setFabricationDate] = React.useState<
    Date | undefined
  >(machine.fabricationDate ? new Date(machine.fabricationDate) : undefined);

  const [serialNumber, setSerialNumber] = React.useState(machine.serialNumber);
  const [location, setLocation] = React.useState(machine.location);
  const [status, setStatus] = React.useState(machine.status); // Usando o status atual da máquina

  const handleSave = () => {
    const updatedMachine = {
      ...machine,
      name,
      type,
      model,
      fabricationDate: fabricationDate.toISOString().split("T")[0], // Formatando a data
      serialNumber,
      location,
      status,
    };
    onSave(updatedMachine);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Máquina</DialogTitle>
          <DialogDescription>
            Faça alterações nos detalhes da máquina aqui. Clique em salvar
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
                label={"Localização"}
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
                label={"Status"}
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
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
