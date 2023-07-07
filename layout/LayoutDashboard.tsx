import { useEffect, useState } from "react"
import SidebarDashboard from "../components/sidebar/SidebarDashboard"
import DeleteDeckModal from "../modal/DeleteDeckModal"
import NavbarDashboard from "../components/NavbarDashboard/NavbarDashboard"
import { useGlobalContext } from "../context/ContextGlobal"


interface Props {
  children: JSX.Element | JSX.Element[]
}
const LayoutDashboard = ({ children }: Props) => {
  const  { globalData } = useGlobalContext()
  useEffect(() => {

  },[globalData])
  return (
    <>
    <NavbarDashboard userInfo={globalData.userInfo}/>

    <div className="relative flex">
      <SidebarDashboard />
      {children}
    </div>
    </>
  )
}

export default LayoutDashboard