"use client";

import {
  LineChart,
  Line,
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
  { name: "Jan", cost: 1000 },
  { name: "Feb", cost: 1200 },
  { name: "Mar", cost: 800 },
  { name: "Apr", cost: 1100 },
  { name: "May", cost: 950 },
  { name: "Jun", cost: 1300 },
  { name: "Jul", cost: 1200 },
  { name: "Aug", cost: 1400 },
  { name: "Sep", cost: 1050 },
  { name: "Oct", cost: 1150 },
  { name: "Nov", cost: 1250 },
  { name: "Dec", cost: 1350 },
];

const chartConfig = {
  cost: {
    label: "Cost",
    color: "#8884d8",
  },
} satisfies ChartConfig;

export function CostByMaintenanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Line type="monotone" dataKey="cost" stroke={chartConfig.cost.color} />
      </LineChart>
    </ChartContainer>
  );
}
