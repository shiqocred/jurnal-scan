import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell, Headset, LogOut, Settings } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] border-b border-gray-200 flex items-center justify-between px-5">
      <div className="flex">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[200px]">
            <DropdownMenuItem
              disabled
              className="data-[disabled]:opacity-100 text-sm"
            >
              manisro09@gmail.com
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Headset className="size-3.5 text-black" />
              Support
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-3.5 text-black" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="size-3.5 text-black" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
