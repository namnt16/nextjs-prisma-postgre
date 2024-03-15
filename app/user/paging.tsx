"use client";

import { usePathname, useSearchParams } from "next/navigation";
import clsx from 'clsx'
import Link from "next/link";
import { generatePagination } from "@/lib/untils";


export default function Paging({totalPages} : {totalPages:number}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1


  const createPageUrl = (pageNumber : string | number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page",pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allpage = generatePagination(currentPage,totalPages)


  const PaginationNumber = ({page,href,position,isActive}:{
    page :number | string,
    href: string,
    position?: 'firts' | 'last'|'middle'|'single',
    isActive: boolean
  }) => {
    const classname = clsx('flex h-10 w-10 items-center justify-center text-sm border',{
      'rounded-l-sm':position === 'firts' || position === 'single',
      'rounded-r-sm':position === 'last' || position === 'single',
      'z-10 bg-blue-100 border-blue-500 text-white': isActive,
      'hover:bg-gray-100':!isActive && position !== 'middle',
      'text-gray-300 pointer-events-none':position === 'middle'
    })

    return isActive && position === 'middle'? (
      <div className={classname}>{page}</div>
    ):(<Link href={href} className={classname}>{page}</Link>)
  }

  const PaginationArrow = ({href,direction,isDisable}:{
    href: string,
    direction: 'left'|'right',
    isDisable?: boolean
  }) => {
    const classname = clsx('flex h-10 w-10 items-center justify-center text-sm border',{
      'pointer-events-none text-gray-300' : isDisable,
      'hover:bg-gray-100':!isDisable,
      "mr-2": direction === 'left',
      'ml-2': direction === 'right'
    })

    const icon = direction === 'left' ? (
        <button>Pre</button>
    ):(<button>Next</button>)
    return isDisable ? (
      <div className={classname}>{icon}</div>
    ):(<Link href={href} className={classname}>{icon}</Link>)
  }

  
  return (
    <div className="inline-flex">
      <PaginationArrow direction="left" href={createPageUrl(currentPage -1)} isDisable={currentPage <=1}/>
      <div className="flex -space-x-px">
        {
          allpage.map((page,index) => {
            let positons : 'firts' |'last' |'single'|'middle' | undefined
            if(index === 0) positons = 'firts'
            if(index === allpage.length - 1 ) positons = 'last'
            if(allpage.length === 1)  positons = 'single'
            if(page === '...') positons = 'middle' 
            return (
              <PaginationNumber key={index} href={createPageUrl(page)} page={page} position={positons} isActive={currentPage === page}/>
            )
          })
        }
      </div>
      <PaginationArrow direction="right" href={createPageUrl(currentPage +1)} isDisable={currentPage >= totalPages}/>
    </div>
  );
}
