import Link from "next/link";
import Links from "./navlink/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Links/>
      </div>
    </main>
  );
}
