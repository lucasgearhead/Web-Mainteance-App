import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/Select";
import { Button } from "../ui/button";

export function MaintenanceFilters({
  onSearch,
  handleNewMaintenance,
}: {
  onSearch: (query: string) => void;
  handleNewMaintenance: (maintenance: any) => void;
}) {
  return (
    <div className="fixed flex justify-between flex-row top-16 right-0 w-full px-10 z-50 py-2 bg-background">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Pesquisar..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-1/3"
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por status:", value)
          }
          label="Status"
          options={[
            { value: "all", label: "Todos" },
            { value: "pending", label: "Pendente" },
            { value: "in-progress", label: "Em Andamento" },
            { value: "completed", label: "Concluída" },
            { value: "canceled", label: "Cancelada" },
          ]}
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por prioridade:", value)
          }
          label="Prioridade"
          options={[
            { value: "all", label: "Todas" },
            { value: "low", label: "Baixa" },
            { value: "medium", label: "Média" },
            { value: "high", label: "Alta" },
            { value: "critical", label: "Crítica" },
          ]}
        />
      </div>
      <Button
        variant={"default"}
        className="w-min "
        onClick={handleNewMaintenance}
      >
        Nova Manutenção
      </Button>
    </div>
  );
}
