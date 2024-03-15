"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({ userid } : {userid:number}) {
  const router = useRouter();
  const handleDelete = async (userid: number) => {
    await axios.delete(`/api/user/${userid}`);
    router.refresh();
  };
  return (
    <button
      onClick={() => handleDelete(userid)}
      className="px-1 h-10 py-1 rounded bg-red-700 text-white"
    >
      Delete
    </button>
  );
}
