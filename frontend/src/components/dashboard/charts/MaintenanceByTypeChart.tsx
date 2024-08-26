"use client";

import { Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Preventiva", value: 400 },
  { name: "Corretiva", value: 300 },
  { name: "Preditiva", value: 300 },
  { name: "Outro", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const chartConfig = {
  preventive: {
    label: "Preventiva",
    color: "#0088FE",
  },
  corrective: {
    label: "Corretiva",
    color: "#00C49F",
  },
  predictive: {
    label: "Preditiva",
    color: "#FFBB28",
  },
  other: {
    label: "Outro",
    color: "#FF8042",
  },
} satisfies ChartConfig;

export function MaintenanceByTypeChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <PieChart>
        <Tooltip content={<ChartTooltipContent />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
