// data/mockData.ts
export interface Item {
  name: string;
  code: string;
  category: string;
  quantity: number;
  unitPrice: string;
  supplier: string;
  lastEntryDate: string;
  lastExitDate: string;
}

// Função para gerar uma data fixa no formato YYYY-MM-DD
const fixedDate = (monthOffset: number, dayOffset: number) => {
  const baseDate = new Date(2023, 0, 1); // January 1, 2023
  baseDate.setMonth(baseDate.getMonth() + monthOffset);
  baseDate.setDate(dayOffset);
  return baseDate.toISOString().split("T")[0];
};

const categories = ["Peça", "Material"];
const suppliers = ["Fornecedor A", "Fornecedor B", "Fornecedor C"];

// Gera dados mockados com valores fixos
export const generateMockItems = (count: number): Item[] => {
  return Array.from({ length: count }, (_, index) => ({
    name: `Item ${index + 1}`,
    code: `CODE${index + 1}`,
    category: categories[index % categories.length],
    quantity: index + 1, // Variação simples e crescente
    unitPrice: ((index + 1) * 10).toFixed(2), // Preço crescente baseado no índice
    supplier: suppliers[index % suppliers.length],
    lastEntryDate: fixedDate(index % 12, (index % 28) + 1), // Datas fixas baseadas no índice
    lastExitDate: fixedDate((index + 1) % 12, (index % 28) + 1), // Datas fixas baseadas no índice
  }));
};
