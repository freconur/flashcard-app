// import { app } from "firebase-admin"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";
import LogoMobile from '../../assets/logo-web.png'

const Navbar = () => {
  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between p-4'>
      <div className="text-white font-semibold">
      <Image src={LogoMobile} layout="responsive"  alt="logo-web"/>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <Link href="/register-login">
          <div className="bg-pink-400 text-white text-lg font-semibold w-[150px] h-[45px] flex items-center justify-center capitalize rounded-lg hover:bg-pink-300 duration-300 cursor-pointer">inicia sesion</div>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar