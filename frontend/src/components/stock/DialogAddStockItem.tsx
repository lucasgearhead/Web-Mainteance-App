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
import { Label } from "@/components/ui/label";
import { SelectComponent } from "@/components/Select";

interface DialogAddStockItemProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: any) => void;
}

export function DialogAddStockItem({
  isOpen,
  onClose,
  onSave,
}: DialogAddStockItemProps) {
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [unitPrice, setUnitPrice] = React.useState(0);
  const [supplier, setSupplier] = React.useState("");

  const handleSave = () => {
    const newItem = {
      name,
      code,
      category,
      quantity,
      unitPrice: parseFloat(unitPrice.toFixed(2)), // Garantir que o preço unitário tenha duas casas decimais
      supplier,
    };
    onSave(newItem);
    onClose(); // Fecha o diálogo após salvar
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Item de Estoque</DialogTitle>
          <DialogDescription>
            Preencha os detalhes para o novo item de estoque e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome do Item
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="code" className="text-right">
              Código
            </Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Categoria
            </Label>
            <SelectComponent
              selectedValue={category}
              onChange={(value: string) => setCategory(value)}
              label={"Categoria"}
              options={[
                { value: "Part", label: "Peça" },
                { value: "Material", label: "Material" },
              ]}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantidade
            </Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="unitPrice" className="text-right">
              Preço Unitário
            </Label>
            <Input
              id="unitPrice"
              type="number"
              step="0.01" // Permite casas decimais
              value={unitPrice}
              onChange={(e) => setUnitPrice(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="supplier" className="text-right">
              Fornecedor
            </Label>
            <Input
              id="supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
