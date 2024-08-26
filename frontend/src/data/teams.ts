const teams = Array.from({ length: 10 }, (_, index) => ({
  name: `Equipe ${index + 1}`,
  department: `Departamento ${String.fromCharCode(65 + (index % 5))}`, // A, B, C, D, E
  members: 3 * (index + 1), // Incrementa de 3 em 3 (3, 6, 9, 12, etc.)
  status: index % 2 === 0 ? "Ativa" : "Inativa",
  maintenanceHistory: [
    {
      date: `2023-05-${String((index % 28) + 1).padStart(2, "0")}`,
      description: "Reunião de revisão de desempenho.",
      performedBy: `Gerente ${String.fromCharCode(65 + (index % 5))}`, // Gerente A, B, C, D, E
    },
    {
      date: `2023-02-${String((index % 28) + 1).padStart(2, "0")}`,
      description: "Planejamento de novas metas e estratégias.",
      performedBy: `Gerente ${String.fromCharCode(70 + (index % 5))}`, // Gerente F, G, H, I, J
    },
  ],
}));

export default teams;
