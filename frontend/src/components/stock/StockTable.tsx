// src/components/StockTable.tsx
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Item } from "@/data/items";

interface StockTableProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onRegisterEntry: (item: Item) => void;
  onRegisterExit: (item: Item) => void;
  onDelete: (item: Item) => void;
}

export function StockTable({
  items,
  onEdit,
  onRegisterEntry,
  onRegisterExit,
  onDelete,
}: StockTableProps) {
  return (
    <Table className="mt-20 z-0">
      <TableCaption>Controle de Estoque de Peças e Materiais</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Código</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead>Valor Unitário</TableHead>
          <TableHead>Fornecedor</TableHead>
          <TableHead>Última Entrada</TableHead>
          <TableHead>Última Saída</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.code}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              {(parseFloat(item.unitPrice) || 0).toFixed(2)}
            </TableCell>
            <TableCell>{item.supplier}</TableCell>
            <TableCell>{item.lastEntryDate}</TableCell>
            <TableCell>{item.lastExitDate}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" onClick={() => onEdit(item)}>
                Editar
              </Button>
              <Button variant="outline" onClick={() => onRegisterEntry(item)}>
                Entrada
              </Button>
              <Button variant="outline" onClick={() => onRegisterExit(item)}>
                Saída
              </Button>
              <Button
                variant="outline"
                className="text-red-500 hover:underline"
                onClick={() => onDelete(item)}
              >
                Deletar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={9} className="text-right">
            Total Itens: {items.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
