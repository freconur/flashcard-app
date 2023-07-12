import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";
import LogoMobile from '../../assets/logo-web.png'
interface Props {
  userInfo: UserInfo
}
const NavbarDashboard = ({ userInfo }: Props) => {
  // const [userInfoNav, setUserInfoNav] = useState<UserInfo>()
  useEffect(() => {

  }, [])

  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between p-4'>
      <div className="text-white font-semibold">
        <Image src={LogoMobile} layout="responsive"  alt="logo-web"/>
      </div>
      <div className="flex gap-1 items-center justify-center">

        {/* <Image className='w-full' src={`/${userInfoNav?.photo}`} width={30} height={30} alt={`${userInfoNav?.name}`} /> */}
        <p className="text-white font-semibold text-lg capitalize flex items-center justify-center">
        </p>
        <Link href="/dashboard" className="flex justify-center items-center gap-3">
          <img className='w-[30px] h-[30px] rounded-full ' src={`${userInfo.photo}`} alt={`${userInfo.name}`} />
          <p className="text-slate-200 capitalize font-semibold">{userInfo.name}</p>
        </Link>
      </div>
    </nav>
  )
}
export default NavbarDashboard