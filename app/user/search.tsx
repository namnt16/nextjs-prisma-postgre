"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const getValuesSearch = (e: string) => {
    console.log(e);
    const param = new URLSearchParams(searchParams)
    if(e){
        param.set('name',e)
    }else{
        param.delete('name')
    }
    replace(`${pathname}?${param.toString()}`)
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border mt-2 ml-2 px-2 h-[35px] w-[600px]"
        onChange={(value) => getValuesSearch(value.target.value)}
        defaultValue={searchParams.get('name')?.toString()}
      ></input>
    </div>
  );
}
