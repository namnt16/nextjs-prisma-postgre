import AddUser from "./add";
import Links from "../navlink/link";
import TableUser from "./table";

import Paging from "./paging";
import { getUserPages } from "@/lib/data";
import Search from "./search";
export default async function User({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    name?:string
  };
}) {
  const name = searchParams?.name || ''
  const currentPage = Number(searchParams?.page) || 1;
  const page = await getUserPages();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="container mx-auto">
        <Links />
        <div className="flex justify-center">
          <AddUser />
          <Search />
        </div>

        <TableUser currentPage={currentPage} name={name}/>
        <div className="flex justify-center mt-10">
          <Paging totalPages={page} />
        </div>
      </div>
      <div></div>
    </main>
  );
}
