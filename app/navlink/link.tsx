import Link from "next/link";

export default async function Links() {
  return (
    <main className="">
      <div>
        <nav><Link className="hover:text-blue-700" href={'/'}>Hompage</Link> <Link className="ml-2 hover:text-blue-700" href={'/user'}>Product</Link></nav>
      </div>
    </main>
  );
}
