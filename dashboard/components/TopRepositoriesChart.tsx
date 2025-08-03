"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TopRepositoriesData {
  repository: string;
  value: number;
  fill: string;
}

interface TopRepositoriesChartProps {
  chartData: TopRepositoriesData[];
  title: string;
  dataKey: string;
}

export function TopRepositoriesChart({
  chartData,
  title,
  dataKey,
}: Readonly<TopRepositoriesChartProps>) {
  const chartConfig = chartData.reduce(
    (config, { repository }) => ({
      ...config,
      [repository]: {
        label: repository,
        color: "hsl(var(--chart-1))",
      },
    }),
    {
      value: {
        label: "Value",
      },
    } as ChartConfig,
  );

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="horizontal"
            margin={{
              left: 0,
            }}
          >
            <XAxis
              dataKey="repository"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" layout="horizontal" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
