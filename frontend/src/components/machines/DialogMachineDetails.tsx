import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Interface para as props do DialogDemo
interface DialogDemoProps {
  machine: {
    name: string;
    type: string;
    model: string;
    fabricationDate: string;
    serialNumber: string;
    location: string;
    status: string;
    maintenanceHistory: {
      date: string;
      description: string;
      performedBy: string;
    }[];
  };
}

export function DialogDemo({ machine }: DialogDemoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Detalhes da Máquina</DialogTitle>
          <DialogDescription>
            Aqui estão os detalhes da máquina selecionada.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Informações gerais da máquina */}
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Nome:</span>
            <span className="col-span-3">{machine.name}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Tipo:</span>
            <span className="col-span-3">{machine.type}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Modelo:</span>
            <span className="col-span-3">{machine.model}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Data de Fabricação:</span>
            <span className="col-span-3">{machine.fabricationDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Número de Série:</span>
            <span className="col-span-3">{machine.serialNumber}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Localização:</span>
            <span className="col-span-3">{machine.location}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-1 font-bold">Status:</span>
            <span className="col-span-3">{machine.status}</span>
          </div>

          {/* Histórico de manutenção */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">Histórico de Manutenção:</h3>
            <div className="border-t mt-2 pt-2">
              {machine.maintenanceHistory.length > 0 ? (
                machine.maintenanceHistory.map((entry, index) => (
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
