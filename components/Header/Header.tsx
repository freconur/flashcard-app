import React from 'react'
import HeaderImage from '../../assets/header-image.png'
import Image from 'next/image'
import Link from 'next/link'
import LayoutCenterContent from '../../layout/LayoutCenterContent'
const Header = () => {
  return (
    <div className='bg-white w-full'>
    <LayoutCenterContent>
        <div className='grid grid-cols-2 w-full p-5'>
          <div className='grid place-content-center gap-10 p-[50px]'>
            <h2 className='text-5xl text-principal font-semibold '>
              Una aplicacion sencilla pero efectiva para tus estudios.
            </h2>
            <p className='text-2xl text-slate-500 '>
              Accede a nuestras herramientas para prepararte para tus examenes. con nuestro aplicativos web podras organizar y enfocarte solo en estudiar.
            </p>
            <Link href="register">
              <button className='hover:bg-cyan-600 duration-300 w-[300px] h-[70px] bg-cyan-500 text-slate-100 text-2xl font-semibold rounded-md'>Unete a nosotros!</button>
            </Link>
          </div>
          <div className=' m-auto'>
            <Image className='' width={500} height={500} src={HeaderImage} alt="imagen para el header" />
          </div>
      </div>
    </LayoutCenterContent>
    </div>
  )
}

export default Header