"use client";
import {
  Calendar,
  CalendarArrowUp,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  File,
  FileText,
  ImageIcon,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button";
const chartData = [
  { date: "1", upload: 123 },
  { date: "2", upload: 189 },
  { date: "3", upload: 156 },
  { date: "4", upload: 278 },
  { date: "5", upload: 201 },
  { date: "6", upload: 167 },
  { date: "7", upload: 245 },
  { date: "8", upload: 198 },
  { date: "9", upload: 234 },
  { date: "10", upload: 176 },
  { date: "11", upload: 289 },
  { date: "12", upload: 213 },
  { date: "13", upload: 157 },
  { date: "14", upload: 267 },
  { date: "15", upload: 190 },
  { date: "16", upload: 231 },
  { date: "17", upload: 178 },
  { date: "18", upload: 256 },
  { date: "19", upload: 203 },
  { date: "20", upload: 187 },
  { date: "21", upload: 245 },
  { date: "22", upload: 169 },
  { date: "23", upload: 298 },
  { date: "24", upload: 212 },
  { date: "25", upload: 178 },
  { date: "26", upload: 234 },
  { date: "27", upload: 201 },
  { date: "28", upload: 267 },
  { date: "29", upload: 189 },
  { date: "30", upload: 223 },
];
const chartConfig = {
  upload: {
    label: "Upload",
    color: "var(--jurnal-secondary)",
  },
} satisfies ChartConfig;

const DashboardHome = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-5">
        <Card className="p-5 gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Halaman Terisi</p>
            <File className="size-4 text-slate-800" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">dari 100 halaman</p>
          </div>
        </Card>
        <Card className="p-5 gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Upload File</p>
            <CloudUpload className="size-4 text-slate-800" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">100</p>
            <p className="text-sm text-muted-foreground">
              Terakhir upload 25 Jan 2025
            </p>
          </div>
        </Card>
        <div className="col-span-2 grid grid-cols-3 gap-5">
          <Card className="p-5 gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Images</p>
              <ImageIcon className="size-4 text-slate-800" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Total 45 MB</p>
            </div>
          </Card>
          <Card className="p-5 gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Videos</p>
              <VideoIcon className="size-4 text-slate-800" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Total 132 MB</p>
            </div>
          </Card>
          <Card className="p-5 gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Documents</p>
              <FileText className="size-4 text-slate-800" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Total 500 MB</p>
            </div>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <CardTitle>Monthly Upload</CardTitle>
            <CardDescription>Summary of your monthly upload</CardDescription>
          </div>
          <div className="flex flex-row items-center">
            <Button
              variant="outline"
              size={"icon"}
              className="shadow-none rounded-r-none border-slate-400 border-r-0"
            >
              <ChevronLeft />
            </Button>
            <div className="flex items-center gap-2 h-9 border-slate-400 border px-3 min-w-44 justify-center text-sm">
              <CalendarIcon className="size-4" />
              Mei 2025
            </div>
            <Button
              variant="outline"
              size={"icon"}
              className="shadow-none rounded-l-none border-slate-400 border-l-0"
            >
              <ChevronRight />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="upload"
                type="natural"
                stroke="var(--color-upload)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
