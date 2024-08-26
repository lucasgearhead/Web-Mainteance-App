import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Interface para as props do DialogTeamDetails
interface DialogTeamDetailsProps {
  team: {
    name: string;
    department: string;
    members: number;
    status: string;
    maintenanceHistory: {
      date: string;
      description: string;
      performedBy: string;
    }[];
  };
}

export function DialogTeamDetails({ team }: DialogTeamDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Time</DialogTitle>
          <DialogDescription>
            Aqui estão os detalhes do time selecionado.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Informações gerais da equipe */}
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Nome:</span>
            <span className="col-span-3">{team.name}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Departamento:</span>
            <span className="col-span-3">{team.department}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Número de Membros:</span>
            <span className="col-span-3">{team.members}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Status:</span>
            <span className="col-span-3">{team.status}</span>
          </div>

          {/* Histórico de manutenção */}
          {/* Supondo que o histórico de manutenção é relevante, adicionei aqui como exemplo */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">Histórico de Manutenção:</h3>
            <div className="border-t mt-2 pt-2">
              {team.maintenanceHistory.length > 0 ? (
                team.maintenanceHistory.map((entry, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <span className="col-span-1 font-bold">Data:</span>
                      <span className="col-span-3">{entry.date}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <span className="col-span-1 font-bold">Descrição:</span>
                      <span className="col-span-3">{entry.description}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <span className="col-span-1 font-bold">
                        Realizado Por:
                      </span>
                      <span className="col-span-3">{entry.performedBy}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>Não há registros de manutenção disponíveis.</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
