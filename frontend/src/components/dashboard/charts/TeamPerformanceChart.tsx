"use client";

import {
  Line,
  LineChart,
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

const chartData = [
  { name: "Team A", avgTime: 4.5 },
  { name: "Team B", avgTime: 3.8 },
  { name: "Team C", avgTime: 5.1 },
  { name: "Team D", avgTime: 3.2 },
  { name: "Team E", avgTime: 2.5 },
  { name: "Team F", avgTime: 7.8 },
  { name: "Team G", avgTime: 5.4 },
  { name: "Team H", avgTime: 4.1 },
  { name: "Team i", avgTime: 3.9 },
  { name: "Team J", avgTime: 6.2 },
];

const chartConfig = {
  avgTime: {
    label: "Average Time",
    color: "#ff7300",
  },
} satisfies ChartConfig;

export function TeamPerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="avgTime"
            stroke="var(--color-avgTime)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
