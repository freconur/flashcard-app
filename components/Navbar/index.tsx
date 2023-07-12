// import { app } from "firebase-admin"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";
import LogoWeb from '../../assets/web-logo.png'

const Navbar = () => {
  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between pr-1'>
      <Link href="/" className="text-white font-semibold">
      {/* <Image className="w-full" src={LogoWeb} layout="responsive"  alt="logo-web"/> */}
      <Image className="p-2" src={LogoWeb} width={200} height={50}  alt="logo-web"/>
      </Link>
      <div className="flex gap-1 items-center justify-center">
        <Link href="/register-login">
          <div className="bg-pink-400 text-white text-lg font-semibold w-[150px] h-[45px] flex items-center justify-center capitalize rounded-lg hover:bg-pink-300 duration-300 cursor-pointer">inicia sesion</div>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar