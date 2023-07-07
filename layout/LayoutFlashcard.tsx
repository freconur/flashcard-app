import NavbarDashboard from "../components/NavbarDashboard/NavbarDashboard"
import { useGlobalContext } from "../context/ContextGlobal"


interface Props {
  children: JSX.Element | JSX.Element[]
}
const LayoutFlashcard = ({ children }: Props) => {
  const { globalData } = useGlobalContext()

  return (
    <>
      <NavbarDashboard userInfo={globalData.userInfo}/>
    {/* <div className="relative flex"> */}
      {children}
    {/* </div> */}
    </>
  )
}

export default LayoutFlashcard