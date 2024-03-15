import prisma from "./prisma";

const ITEM_PRE_PAGE = 5;
export const getUserPagination = async (currentPage: number, name: string) => {
  const offset = (currentPage - 1) * ITEM_PRE_PAGE;
  try {
    const contact = await prisma.user.findMany({
      skip: offset,
      take: ITEM_PRE_PAGE,
      where: {
        OR: [
          {
            name: name,
          },
        ],
      },
    });
    return contact;
  } catch (error) {
    throw new Error("error");
  }
};

export const getUserPages = async () => {
  try {
    const contact = await prisma.user.count();
    const totalPages = Math.ceil(Number(contact) / ITEM_PRE_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("error");
  }
};
