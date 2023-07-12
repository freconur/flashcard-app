import Image from 'next/image'
import React from 'react'
import infoImage from '../../assets/deck-info.png'
import LayoutCenterContent from '../../layout/LayoutCenterContent'
const InfoStudyCards = () => {
  return (
    <div className='bg-white w-full'>
      <LayoutCenterContent>
        <div className='grid grid-cols-2 bg-white p-10'>
          <div className="m-auto">
            <Image src={infoImage} width={500} height={500} alt="indo flashcards" />
          </div>
          <div className='grid place-content-center gap-10 p-[50px]'>
            <h1 className='text-principal text-5xl font-semibold'>Organiza tus tarjetas de estudio, observa tu progreso y alcanza tus metas</h1>
            <p className='text-3xl text-slate-500'>
              crea decks y tarjetas de estudio personzalidos a tus necesidades y mira tu progreso en tiempo real.
            </p>
          </div>
        </div>
      </LayoutCenterContent>
    </div>
  )
}

export default InfoStudyCards