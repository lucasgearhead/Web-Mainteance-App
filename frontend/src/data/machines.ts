const machines = Array.from({ length: 30 }, (_, index) => ({
  name: `Máquina ${index + 1}`,
  type: `Tipo ${String.fromCharCode(65 + (index % 5))}`,
  model: `Modelo X${(index % 10) + 1}`,
  fabricationDate: `2022-01-${String((index % 28) + 1).padStart(2, "0")}`,
  serialNumber: `SN${String(index + 1).padStart(3, "0")}`,
  location: `Fábrica ${Math.floor(index / 5) + 1}`,
  status: index % 2 === 0 ? "Rodando" : "Parado",
  maintenanceHistory: [
    {
      date: `2023-05-${String((index % 28) + 1).padStart(2, "0")}`,
      description: "Troca de óleo e verificação geral.",
      performedBy: `Equipe ${String.fromCharCode(65 + (index % 10))}`,
    },
    {
      date: `2023-02-${String((index % 28) + 1).padStart(2, "0")}`,
      description: "Substituição de peças desgastadas.",
      performedBy: `Equipe ${String.fromCharCode(75 + (index % 10))}`,
    },
  ],
}));

export default machines;
