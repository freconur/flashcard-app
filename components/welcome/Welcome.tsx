import React from 'react'
import Frecodev from '../../assets/frecodev-picture.jpg'
import Image from 'next/image'
const Welcome = () => {
  return (
    <div className='pl-5 grid grid-rows-flashcardWelcome'>
      <div>
        <h1 className='text-2xl text-slate-300 font-semibold my-5'>Bienvenido a tu dashboard de estudio favorito</h1>
        <div>
          <p className='text-xl text-slate-300 font-medium my-5'>
            Para comenzar a estudiar selecciona un deck del lado izquierdo, si aun no tienes un deck creado puedes hacerlo dando en el boton de crear nuevo deck.
          </p>
          <p className='text-xl text-slate-300 font-medium my-5'>
            Agrega los deck que necesites para estudiar lo que quieras en cualquier momento.
          </p>
          <p className='text-xl text-slate-300 font-medium my-5'>
            Comienza a disfrutar de nuestro servicio gratuito.
          </p>
        </div>
      </div>
      {/* <div className='w-full grid items-center justify-center place-content-center'>
        <Image className='w-[50px] h-[50px] m-auto rounded-full shadow-lg' src={Frecodev} alt="photo-image" />
        <p className='capitalize text-slate-300'>desarrollado por frecodev</p>
      </div> */}
      <div className='w-full flex gap-3'>
        <Image className='w-[100px] h-[100px]  rounded-full shadow-lg' src={Frecodev} alt="photo-image" />
        <div className='grid place-content-center'>
          <div className='capitalize text-slate-300 flex justify-center items-center'>desarrollado por frecodev</div>
          <div className='capitalize text-sm text-slate-300 flex gap-3 justify-center items-center duration-300'><a className='hover:text-teal-300 hover:duration-300 cursor-pointer'>GitHub</a> | <a className='hover:text-teal-300 duration-300 cursor-pointer'>Linkedin</a></div>
          <div className='capitalize text-[12px] text-slate-300 flex justify-center items-center'>2023</div>
        </div>
      </div>
    </div>
  )
}

export default Welcome