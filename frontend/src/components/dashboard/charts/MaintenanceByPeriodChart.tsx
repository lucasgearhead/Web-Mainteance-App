"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dados do gráfico
const chartData = [
  { name: "Jan", completed: 10, pending: 5 },
  { name: "Feb", completed: 12, pending: 4 },
  { name: "Mar", completed: 8, pending: 6 },
  { name: "Apr", completed: 15, pending: 3 },
  { name: "May", completed: 10, pending: 7 },
  { name: "Jun", completed: 13, pending: 5 },
  { name: "Jul", completed: 9, pending: 6 },
  { name: "Aug", completed: 14, pending: 2 },
  { name: "Sep", completed: 11, pending: 4 },
  { name: "Oct", completed: 16, pending: 3 },
  { name: "Nov", completed: 12, pending: 5 },
  { name: "Dec", completed: 14, pending: 4 },
];

// Configuração do gráfico
const chartConfig = {
  completed: {
    label: "Completed",
    color: "#4caf50", // Cor para 'completed'
  },
  pending: {
    label: "Pending",
    color: "#ff9800", // Cor para 'pending'
  },
} satisfies ChartConfig;

export function MaintenanceByPeriodChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
          <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
