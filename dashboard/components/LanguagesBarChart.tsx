"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface LanguageData {
  language: string;
  count: number;
  fill: string;
}

export function LanguagesBarChart({
  chartData,
}: Readonly<{ chartData: LanguageData[] }>) {
  const chartConfig = chartData.reduce(
    (config, { language }) => ({
      ...config,
      [language]: {
        label: language,
        color: "hsl(var(--chart-6))",
      },
    }),
    {
      count: {
        label: "Count",
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
          {"File Count Per Type"}
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
              dataKey="language"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="horizontal" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing language distribution across repository
        </div>
      </CardFooter>
    </Card>
  );
}
