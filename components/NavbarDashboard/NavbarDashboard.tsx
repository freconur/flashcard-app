import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";
import LogoWeb from '../../assets/web-logo.png'
import { useGlobalContext } from "../../context/ContextGlobal";
import { useAuthUser } from "next-firebase-auth";
interface Props {
  userInfo: UserInfo
}
const NavbarDashboard = ({ userInfo }: Props) => {
  const AuthUser = getAuth()
  const { globalData, getUserInfo } = useGlobalContext()
  useEffect(() => {
    globalData
    AuthUser.onAuthStateChanged(user =>
      getUserInfo({ id: `${user?.uid}`, photo: `${user?.photoURL}`, name: `${user?.displayName}` }))
  }, [])
  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between p-2'>
      <div className="text-white font-semibold flex gap-5">
        <div>
          <Image src={LogoWeb} height={47} alt="logo-web" />
        </div>
        <Link href="/dashboard" className="rounded-lg bg-gradient-to-r from-teal-500 to-blue-700 hover:from-teal-400 hover:to-blue-600 duration-300 p-2 h-[45px] text-slate-100 capitalize flex items-center justify-center ">
          mi biblioteca
        </Link>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <p className="text-white font-semibold text-lg capitalize flex items-center justify-center">
        </p>
        {
          userInfo &&
          <Link href="/dashboard" className="flex justify-center items-center gap-2">
            
            <img className='w-[40px] h-[40px] rounded-full ' src={userInfo.photo && userInfo.photo} alt={`${userInfo.name}`} />
            <p className="text-slate-200 capitalize text-lg font-semibold">hola {userInfo.name} !</p>
          </Link>
        }
      </div>
    </nav>
  )
}
export default NavbarDashboard