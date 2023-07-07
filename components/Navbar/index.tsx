// import { app } from "firebase-admin"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between p-4'>
      <div className="text-white font-semibold">FlashCards</div>
      <div className="flex gap-1 items-center justify-center">
        <Link href="/register-login">
          <div className="bg-yellow-500 text-white font-semibold w-[120px] h-[40px] flex items-center justify-center capitalize rounded-sm cursor-pointer">Login</div>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar