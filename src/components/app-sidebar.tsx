"use client";

import * as React from "react";
import {
  BookIcon,
  Check,
  ChevronsUpDown,
  Clock,
  Cloud,
  Command,
  Home,
  Plus,
  Star,
  Trash2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Progress } from "./ui/progress";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-white border-slate-200">
      <SidebarHeader className="border-b border-slate-200 bg-slate-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold">Journal Inc</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <DropdownMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20 outline-0 ring-0 mt-2"
                    >
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-jurnal-secondary text-jurnal-primary">
                        S
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Sro</span>
                        <span className="text-xs leading-none">Workspace</span>
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)]"
                    align="start"
                  >
                    <DropdownMenuItem className="px-1.5 py-1">
                      <div className="flex aspect-square size-7 text-sm items-center justify-center rounded-md bg-jurnal-secondary text-jurnal-primary">
                        S
                      </div>
                      <span className="">Sro</span>
                      <Check className="ml-auto mr-1 text-black" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="px-1.5 py-1">
                      <Plus className="size-4 text-black" />
                      <span className="">Create New</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </DropdownMenu>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/home"}>
                  <Home className="size-4" />
                  <span className="font-medium">Beranda</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/book"}>
                  <BookIcon className="size-4" />
                  <span className="font-medium">Buku</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/recent"}>
                  <Clock className="size-4" />
                  <span className="font-medium">Terbaru</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/starred"}>
                  <Star className="size-4" />
                  <span className="font-medium">Berbintang</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/trash"}>
                  <Trash2 className="size-4" />
                  <span className="font-medium">Sampah</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="hover:gap-3 transition-all data-[state=open]:text-sidebar-accent-foreground hover:bg-jurnal-secondary/20 data-[state=open]:bg-jurnal-secondary/20"
              >
                <Link href={"/dashboard/storage"}>
                  <Cloud className="size-4" />
                  <span className="font-medium">Penyimpanan</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <div className="px-3 py-1 flex flex-col gap-1">
              <Progress value={40} className="h-1.5" />
              <p className="text-sm text-gray-700">Tersedia 800 MB dari 1 GB</p>
            </div>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
