import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogViewMaintenance({ isOpen, onClose, maintenance }: any) {
  if (!maintenance) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1000px] sm:max-h-[90%]">
        <DialogHeader>
          <DialogTitle>Detalhes da Manutenção</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-y-scroll h-[90%]">
          <div className="flex flex-col">
            <strong>Título:</strong>
            <span>{maintenance.title}</span>
          </div>
          <div className="flex flex-col">
            <strong>Descrição:</strong>
            <span>{maintenance.description}</span>
          </div>
          <div className="flex flex-col">
            <strong>Equipamento:</strong>
            <span>{maintenance.equipment}</span>
          </div>
          <div className="flex flex-col">
            <strong>Data de Solicitação:</strong>
            <span>{maintenance.dateRequested}</span>
          </div>
          <div className="flex flex-col">
            <strong>Prioridade:</strong>
            <span>{maintenance.priority}</span>
          </div>
          <div className="flex flex-col">
            <strong>Status:</strong>
            <span>{maintenance.status}</span>
          </div>

          <div className="flex flex-col">
            <strong>Equipe de Manutenção:</strong>
            <span>{maintenance.team}</span>
          </div>
          <div className="flex flex-col">
            <strong>Comentários:</strong>
            <span>{maintenance.comments}</span>
          </div>
          <div className="flex flex-col">
            <strong>Histórico de Atualizações:</strong>
            <ul>
              {maintenance.history.map((update: any, index: number) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
