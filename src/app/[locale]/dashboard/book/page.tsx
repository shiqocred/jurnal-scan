"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronsRight,
  LayoutGrid,
  LayoutList,
  SearchIcon,
  Star,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { columns } from "./columns";

const DashboardBook = () => {
  const [expand, setExpand] = useState(true);

  const payments = [
    {
      id: "a1b2c3d4",
      name: "Konferensi Teknologi",
      date: "15 April 2026",
      size: 80,
      type: "image",
    },
    {
      id: "e5f6g7h8",
      name: "Pameran Seni Rupa",
      date: "22 Juli 2026",
      size: 110,
      type: "image",
    },
    {
      id: "i9j0k1l2",
      name: "Seminar Kewirausahaan",
      date: "3 September 2026",
      size: 95,
      type: "image",
    },
    {
      id: "m3n4o5p6",
      name: "Festival Kuliner",
      date: "18 November 2026",
      size: 130,
      type: "image",
    },
    {
      id: "q7r8s9t0",
      name: "Lokakarya Desain Grafis",
      date: "7 Januari 2027",
      size: 85,
      type: "image",
    },
    {
      id: "u1v2w3x4",
      name: "Konser Musik Jazz",
      date: "28 Februari 2027",
      size: 120,
      type: "image",
    },
    {
      id: "y5z6a7b8",
      name: "Workshop Fotografi",
      date: "12 April 2027",
      size: 100,
      type: "image",
    },
    {
      id: "c9d0e1f2",
      name: "Seminar Kesehatan",
      date: "5 Juni 2027",
      size: 90,
      type: "image",
    },
    {
      id: "g3h4i5j6",
      name: "Pameran Otomotif",
      date: "20 Agustus 2027",
      size: 150,
      type: "image",
    },
    {
      id: "k7l8m9n0",
      name: "Festival Film Independen",
      date: "10 Oktober 2027",
      size: 115,
      type: "image",
    },
    {
      id: "o1p2q3r4",
      name: "Konferensi Lingkungan",
      date: "2 Desember 2027",
      size: 105,
      type: "image",
    },
    {
      id: "s5t6u7v8",
      name: "Pameran Teknologi AI",
      date: "25 Januari 2028",
      size: 125,
      type: "image",
    },
    {
      id: "w9x0y1z2",
      name: "Workshop Penulisan Kreatif",
      date: "18 Maret 2028",
      size: 75,
      type: "image",
    },
    {
      id: "a3b4c5d6",
      name: "Seminar Investasi",
      date: "9 Mei 2028",
      size: 88,
      type: "image",
    },
    {
      id: "e7f8g9h0",
      name: "Festival Teater",
      date: "30 Juni 2028",
      size: 135,
      type: "image",
    },
    {
      id: "i9j0k1l2",
      name: "Konferensi Pendidikan",
      date: "14 Agustus 2028",
      size: 95,
      type: "image",
    },
    {
      id: "m3n4o5p6",
      name: "Pameran Arsitektur",
      date: "27 September 2028",
      size: 110,
      type: "image",
    },
    {
      id: "q7r8s9t0",
      name: "Workshop Robotika",
      date: "5 November 2028",
      size: 85,
      type: "image",
    },
    {
      id: "u1v2w3x4",
      name: "Festival Budaya",
      date: "19 Desember 2028",
      size: 140,
      type: "image",
    },
    {
      id: "y5z6a7b8",
      name: "Seminar Psikologi",
      date: "8 Februari 2029",
      size: 92,
      type: "image",
    },
    {
      id: "c9d0e1f2",
      name: "Pameran Fotografi",
      date: "23 Maret 2029",
      size: 118,
      type: "image",
    },
    {
      id: "g3h4i5j6",
      name: "Konferensi Energi Terbarukan",
      date: "11 Mei 2029",
      size: 105,
      type: "image",
    },
    {
      id: "k7l8m9n0",
      name: "Workshop Desain Interior",
      date: "29 Juni 2029",
      size: 78,
      type: "image",
    },
    {
      id: "o1p2q3r4",
      name: "Festival Olahraga",
      date: "17 Agustus 2029",
      size: 132,
      type: "image",
    },
    {
      id: "s5t6u7v8",
      name: "Seminar Kecerdasan Buatan",
      date: "4 Oktober 2029",
      size: 98,
      type: "image",
    },
  ];

  return (
    <div
      data-active={expand}
      className="w-full flex min-h-full group overflow-hidden"
    >
      <div className="w-full flex flex-col p-5 gap-5">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <Button variant={"outline"}>
              Halaman
              <ChevronDown />
            </Button>
            <Button variant={"outline"}>
              Jenis
              <ChevronDown />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <SearchIcon />
            </Button>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex rounded-md border overflow-hidden">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="bg-slate-300 hover:bg-slate-300 rounded-none"
              >
                <LayoutList />
              </Button>
              <Button variant={"ghost"} size={"icon"} className="rounded-none">
                <LayoutGrid />
              </Button>
            </div>
            <Button variant={"outline"} onClick={() => setExpand(!expand)}>
              Preview
              <ChevronsRight className="group-data-[active=false]:rotate-180 transition-all duration-500" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <DataTable columns={columns} data={payments} />
        </div>
      </div>
      <div className="flex flex-col group-data-[active=true]:w-1/3 group-data-[active=false]:w-0 border-l border-slate-200 flex-none transition-all duration-500">
        <h3 className="text-xl font-bold leading-9 p-5">Detail</h3>
        <Separator />
        <div className="flex flex-col gap-5 p-5">
          <div className="w-full aspect-video relative overflow-hidden rounded-md">
            <Image
              src={"https://dummyimage.com/800x450/000/fff"}
              fill
              alt=""
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Judul Buku</h3>
              <p className="text-slate-500 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                repudiandae architecto sit aliquid recusandae iste error
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                <Button className="flex gap-1 w-auto" variant={"outline"}>
                  <Star className="size-4" />
                  <p className="text-xs font-bold">Berbintang</p>
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold">Jenis</p>
                <p className="text-slate-500 text-sm">Gambar</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold">Ukuran</p>
                <p className="text-slate-500 text-sm">385 KB</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold">Diupload</p>
                <p className="text-slate-500 text-sm">24 Maret 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBook;
