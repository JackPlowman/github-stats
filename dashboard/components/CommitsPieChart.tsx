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
  [key: string]: any;
}

export function CommitsPieChart({
  chartData,
}: Readonly<{ chartData: Commits[] }>) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          Total Commits
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
                          className="fill-white text-4xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                        >
                          {chartData.reduce((acc, data) => acc + data.total, 0)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 28}
                          className="fill-white text-lg font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
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
