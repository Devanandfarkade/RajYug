import Image from "next/image";
import Event from "../src/components/events/Events";
import ExclusiveEvents from "@/src/components/events/ExclusiveEvents";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-screen flex-col items-start justify-between">
        <Event />
        <ExclusiveEvents />
      </main>
    </div>
  );
}
