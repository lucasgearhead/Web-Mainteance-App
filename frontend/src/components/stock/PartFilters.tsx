import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/Select";
import { Button } from "../ui/button";

export function PartFilters({
  onSearch,
  handleNewMaterial,
}: {
  onSearch: (query: string) => void;
  handleNewMaterial: () => void;
}) {
  return (
    <div className="flex flex-row justify-between fixed top-16 right-0 w-full px-10 bg-background z-50 py-2">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Pesquisar peças..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-1/3"
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por categoria de peça:", value)
          }
          label="Categoria"
          options={[
            { value: "all", label: "Todas" },
            { value: "electrical", label: "Elétrica" },
            { value: "mechanical", label: "Mecânica" },
            { value: "hydraulic", label: "Hidráulica" },
          ]}
        />
        <SelectComponent
          selectedValue=""
          onChange={(value: string) =>
            console.log("Filtrar por fornecedor:", value)
          }
          label="Fornecedor"
          options={[
            { value: "all", label: "Todos" },
            { value: "supplier1", label: "Fornecedor 1" },
            { value: "supplier2", label: "Fornecedor 2" },
            { value: "supplier3", label: "Fornecedor 3" },
          ]}
        />
      </div>
      <Button variant={"default"} className="w-min" onClick={handleNewMaterial}>
        Nova Peça / Material
      </Button>
    </div>
  );
}
