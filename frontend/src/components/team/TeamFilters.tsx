import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/Select";
import { Button } from "../ui/button";

export function TeamFilters({
  onSearch,
  handleNewTeam,
}: {
  onSearch: (query: string) => void;
  handleNewTeam: () => void;
}) {
  return (
    <div className="flex flex-row justify-between fixed top-16 right-0 w-full px-10 bg-background z-50 py-2">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Pesquisar equipes..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-2/3"
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por departamento:", value)
          }
          label="Departamento"
          options={[
            { value: "all", label: "Todos" },
            { value: "hr", label: "Recursos Humanos" },
            { value: "engineering", label: "Engenharia" },
            { value: "maintenance", label: "Manutenção" },
          ]}
        />
      </div>
      <Button variant={"default"} className="w-min" onClick={handleNewTeam}>
        Nova Equipe
      </Button>
    </div>
  );
}
