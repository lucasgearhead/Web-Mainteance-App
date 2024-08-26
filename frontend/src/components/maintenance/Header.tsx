import { Button } from "@/components/ui/button";

export function MaintenanceHeader({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Gerenciamento de Manutenções</h1>
      <Button variant="default" onClick={onCreate}>
        Nova Manutenção
      </Button>
    </div>
  );
}
