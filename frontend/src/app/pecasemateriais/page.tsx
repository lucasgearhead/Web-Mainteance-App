// pages/InventoryControl.tsx
"use client";

import { useState } from "react";
import { StockTable } from "@/components/stock/StockTable";
import { DialogEditItem } from "@/components/stock/DialogEditItem";
import { DialogRegisterTransaction } from "@/components/stock/DialogRegisterTransation";
import { generateMockItems, Item } from "@/data/items";
import { DialogAddStockItem } from "@/components/stock/DialogAddStockItem";
import { PartFilters } from "@/components/stock/PartFilters";

const initialItems: Item[] = generateMockItems(20); // Gera 20 itens mockados

export default function InventoryControl() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [transactionType, setTransactionType] = useState<
    "entry" | "exit" | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filtrar as máquinas com base no searchQuery
  };

  const handleNewMaterial = () => {
    setIsDialogOpen(true);
  };

  const handleEdit = (item: Item) => {
    setSelectedItem(item);
    setIsEditDialogOpen(true);
  };

  const handleRegisterEntry = (item: Item) => {
    setSelectedItem(item);
    setTransactionType("entry");
    setIsRegisterDialogOpen(true);
  };

  const handleRegisterExit = (item: Item) => {
    setSelectedItem(item);
    setTransactionType("exit");
    setIsRegisterDialogOpen(true);
  };

  const handleDelete = (item: Item) => {
    setItems((prevItems) => prevItems.filter((i) => i.code !== item.code));
  };

  const handleSaveItem = (item: Item) => {
    setItems((prevItems) =>
      prevItems.map((i) => (i.code === item.code ? item : i))
    );
  };

  const handleSaveTransaction = (transaction: {
    quantity: number;
    date: string;
    reason?: string;
  }) => {
    if (selectedItem) {
      const updatedItem = {
        ...selectedItem,
        quantity:
          transactionType === "entry"
            ? selectedItem.quantity + transaction.quantity
            : selectedItem.quantity - transaction.quantity,
      };
      setItems((prevItems) =>
        prevItems.map((i) => (i.code === updatedItem.code ? updatedItem : i))
      );
    }
  };

  return (
    <div className="p-10 justify-end flex flex-col gap-5">
      <PartFilters
        onSearch={handleSearch}
        handleNewMaterial={handleNewMaterial}
      />
      <StockTable
        items={items}
        onEdit={handleEdit}
        onRegisterEntry={handleRegisterEntry}
        onRegisterExit={handleRegisterExit}
        onDelete={handleDelete}
      />
      {selectedItem && (
        <DialogEditItem
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSave={handleSaveItem}
          item={selectedItem}
        />
      )}
      {selectedItem && transactionType && (
        <DialogRegisterTransaction
          isOpen={isRegisterDialogOpen}
          onClose={() => setIsRegisterDialogOpen(false)}
          onSave={handleSaveTransaction}
          type={transactionType}
        />
      )}
      <DialogAddStockItem
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={() => {}}
      />
    </div>
  );
}
