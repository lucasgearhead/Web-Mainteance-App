import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/Select";
import { Button } from "../ui/button";

export function MachineFilters({
  onSearch,
  handleNewMachine,
}: {
  onSearch: (query: string) => void;
  handleNewMachine: (newMachine: any) => void;
}) {
  return (
    <div className="fixed flex justify-between flex-row top-16 right-0 w-full px-10 z-50 py-2 bg-background">
      <div className="flex gap-4">
        <Input
          placeholder="Pesquisar máquinas..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-1/3"
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por tipo de máquina:", value)
          }
          label="Tipo de Máquina"
          options={[
            { value: "all", label: "Todos" },
            { value: "type1", label: "Tipo 1" },
            { value: "type2", label: "Tipo 2" },
            { value: "type3", label: "Tipo 3" },
          ]}
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por status da máquina:", value)
          }
          label="Status"
          options={[
            { value: "all", label: "Todos" },
            { value: "active", label: "Ativa" },
            { value: "inactive", label: "Inativa" },
            { value: "maintenance", label: "Em Manutenção" },
          ]}
        />
      </div>
      <Button variant={"default"} className="w-min " onClick={handleNewMachine}>
        Nova Máquina
      </Button>
    </div>
  );
}
