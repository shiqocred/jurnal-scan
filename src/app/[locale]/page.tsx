import { Button } from "@/components/ui/button";
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
