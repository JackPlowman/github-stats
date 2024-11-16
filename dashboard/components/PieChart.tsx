"use client";

import * as React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartConfig = {
  user: {
    label: "User",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export interface Commits {
  user: string;
  total: number;
  fill: string;
}

export function CommitsPieChart({
  chartData,
}: Readonly<{ chartData: Commits[] }>) {
  return (
    <Card className="flex flex-col bg-transparent text-foreground">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Commits</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] bg-transparent"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="user"
              innerRadius={60}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.user} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                          style={{ fill: "var(--foreground)" }}
                        >
                          {chartData.reduce((acc, data) => acc + data.total, 0)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 24}
                          className="fill-muted-foreground"
                          style={{ fill: "var(--foreground)" }}
                        >
                          Commits
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
