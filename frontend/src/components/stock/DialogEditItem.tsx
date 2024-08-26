// components/DialogEditItem.tsx
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
import { SelectComponent } from "@/components/Select";

interface Item {
  name: string;
  code: string;
  category: string;
  quantity: number;
  unitPrice: number;
  supplier: string;
  lastEntryDate: string;
  lastExitDate: string;
}

interface DialogEditItemProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
  item?: Item;
}

export function DialogEditItem({
  isOpen,
  onClose,
  onSave,
  item,
}: DialogEditItemProps) {
  const [name, setName] = React.useState(item ? item.name : "");
  const [code, setCode] = React.useState(item ? item.code : "");
  const [category, setCategory] = React.useState(item ? item.category : "");
  const [quantity, setQuantity] = React.useState(item ? item.quantity : 0);
  const [unitPrice, setUnitPrice] = React.useState(item ? item.unitPrice : 0);
  const [supplier, setSupplier] = React.useState(item ? item.supplier : "");
  const [lastEntryDate, setLastEntryDate] = React.useState(
    item ? item.lastEntryDate : ""
  );
  const [lastExitDate, setLastExitDate] = React.useState(
    item ? item.lastExitDate : ""
  );
  const handleSave = () => {
    const updatedItem = {
      name,
      code,
      category,
      quantity,
      unitPrice,
      supplier,
      lastEntryDate,
      lastExitDate,
    };
    onSave(updatedItem);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {item ? "Editar Item" : "Adicionar Novo Item"}
          </DialogTitle>
          <DialogDescription>
            {item
              ? "Atualize as informações do item."
              : "Preencha os detalhes do novo item."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do Item"
          />
          <Input
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código"
          />
          <SelectComponent
            selectedValue={category}
            onChange={setCategory}
            label="Categoria"
            options={[
              { value: "Peça", label: "Peça" },
              { value: "Material", label: "Material" },
            ]}
          />
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantidade Inicial"
          />
          <Input
            id="unitPrice"
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            placeholder="Valor Unitário"
          />
          <Input
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Fornecedor"
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
