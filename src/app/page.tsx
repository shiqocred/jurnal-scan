import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      home
      <Button asChild>
        <Link href={"/dashboard/home"}>Dashboard</Link>
      </Button>
    </div>
  );
}
