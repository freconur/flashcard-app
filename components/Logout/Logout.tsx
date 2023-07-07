import { getAuth, signOut } from "firebase/auth"
import { authApp } from "../../firebase/firebase.config"

const Logout = () => {
const auth = getAuth(authApp)
const handleLogout = () => {
  signOut(auth)
}

  return (
    <div className="w-full h-[50px] py-2">
      <div className="p-2 font-semibold hover:opacity-80 duration-300 bg-teal-500 rounded-md  w-full flex justify-center items-center" onClick={handleLogout}>cerrar sesion</div>
    </div>
  )
}

export default Logout