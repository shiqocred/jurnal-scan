"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ImageIcon, MoreVertical } from "lucide-react";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => {
      return (
        <p className="w-full flex gap-2 items-center">
          {row.original.type === "image" && <ImageIcon className="size-4" />}
          {row.original.name}
        </p>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Tanggal",
  },
  {
    accessorKey: "size",
    header: "Ukuran",
    cell: ({ row }) => {
      return <p>{row.original.size} KB</p>;
    },
  },
  {
    id: "more",
    cell: () => (
      <Button variant={"ghost"} size={"icon"}>
        <MoreVertical className="size-4" />
      </Button>
    ),
  },
];
