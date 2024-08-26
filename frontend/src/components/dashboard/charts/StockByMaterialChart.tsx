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
  { name: "Material A", stock: 15 },
  { name: "Material B", stock: 20 },
  { name: "Material C", stock: 5 },
  { name: "Material D", stock: 10 },
  { name: "Material E", stock: 8 },
  { name: "Material F", stock: 12 },
  { name: "Material G", stock: 18 },
];

const chartConfig = {
  stock: {
    label: "Stock",
    color: "#2196f3",
  },
} satisfies ChartConfig;

export function StockByMaterialChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar dataKey="stock" fill={chartConfig.stock.color} />
      </BarChart>
    </ChartContainer>
  );
}
