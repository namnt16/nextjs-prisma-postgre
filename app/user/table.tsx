import prisma from "@/lib/prisma";
import DeleteButton from "./delete";
import UpdateUser from "./update";
import { getUserPagination } from "@/lib/data";

export default async function TableUser({
  currentPage,
  name
}: {
  currentPage: number;
  name: string
}) {
  const user = await getUserPagination(currentPage,name);
  return (
    <>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr
                key={item.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2 flex">
                  <DeleteButton userid={item.id} />
                  <UpdateUser userid={item.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
