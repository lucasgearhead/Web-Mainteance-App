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

const data = [
  { name: "Machine A", maintenance: 4 },
  { name: "Machine B", maintenance: 7 },
  { name: "Machine C", maintenance: 2 },
  { name: "Machine D", maintenance: 5 },
  { name: "Machine E", maintenance: 8 },
  { name: "Machine F", maintenance: 3 },
];

const chartConfig = {
  maintenance: {
    label: "Maintenance",
    color: "#2196f3",
  },
} satisfies ChartConfig;

export function MaintenanceByEquipmentChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar dataKey="maintenance" fill={chartConfig.maintenance.color} />
      </BarChart>
    </ChartContainer>
  );
}
