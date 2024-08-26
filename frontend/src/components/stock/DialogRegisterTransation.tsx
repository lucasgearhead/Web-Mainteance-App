// components/DialogRegisterTransaction.tsx
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Transaction {
  quantity: number;
  date: string;
  reason?: string;
}

interface DialogRegisterTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (transaction: Transaction) => void;
  type: "entry" | "exit";
}

export function DialogRegisterTransaction({
  isOpen,
  onClose,
  onSave,
  type,
}: DialogRegisterTransactionProps) {
  const [quantity, setQuantity] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [reason, setReason] = React.useState("");

  const handleSave = () => {
    const transaction = { quantity, date, reason };
    onSave(transaction);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {type === "entry" ? "Registrar Entrada" : "Registrar Saída"}
          </DialogTitle>
          <DialogDescription>
            Preencha os detalhes da {type === "entry" ? "entrada" : "saída"} do
            item.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantidade"
          />
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
          />
          <Input
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Motivo (opcional)"
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
