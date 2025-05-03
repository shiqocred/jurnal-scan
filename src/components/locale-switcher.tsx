"use client";

import { startTransition } from "react";
import { Locale, useLocale } from "next-intl";
import { CheckIcon, Languages } from "lucide-react";
import { ID as IDFlag, GB as GBFlag } from "country-flag-icons/react/3x2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const onChangeLocale = (locale: Locale) => {
    startTransition(() => router.replace(pathname, { locale }));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10}>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => onChangeLocale(routing.locales[0])}
            className="items-center data-[disabled]:opacity-100"
            disabled={routing.locales[0] === locale}
          >
            <IDFlag />
            Indonesia
            <CheckIcon
              className={cn(
                routing.locales[0] === locale ? "opacity-100" : "opacity-0"
              )}
            />
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => onChangeLocale(routing.locales[1])}
            className="items-center data-[disabled]:opacity-100"
            disabled={routing.locales[1] === locale}
          >
            <GBFlag />
            Inggris
            <CheckIcon
              className={cn(
                routing.locales[1] === locale ? "opacity-100" : "opacity-0"
              )}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
