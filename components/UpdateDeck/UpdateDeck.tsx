import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/ContextGlobal"
import InputNameUpdate from "./InputNameUpdate"
import { RiArrowLeftLine } from "react-icons/ri";
import DeckColorsUpdate from "../DeckColors/DeckColorsUpdate";
import { updateDataDeck } from "../../Reducer/UserDecks";

const UpdateDeck = () => {
  const { globalData, updateDeckShow,updateTitleDeck } = useGlobalContext()
  const { settingsDeck, deckToUpdate, getTitleFromDeck } = globalData
  const [deckValuesUpdate, setDeckValuesUpdate] = useState<DecksUser>()

  useEffect(() => {
    setDeckValuesUpdate(deckToUpdate)
  }, [deckToUpdate])

  const handleChangeUpdateDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckValuesUpdate({
      ...deckValuesUpdate,
      [e.target.name]: e.target.value
    })
  }
  const updateDeck = (e: React.FormEvent<HTMLFormElement>, title:string | undefined) => {
    e.preventDefault()
    deckValuesUpdate && updateDataDeck(`${globalData.idUser}`,deckValuesUpdate)
    updateTitleDeck(title as string)
    updateDeckShow()
  }
  return (
    <div className={`${settingsDeck && 'duration-300 left-0'} absolute z-[200] -left-[500px] duration-300 bg-secundary p-2 w-full h-altura`}>

<div className="flex gap-3 mb-3">
      <div onClick={updateDeckShow} className='flex justify-start items-center bg-transparent  text-gray-300 hover:text-gray-100 duration-100'>
        <RiArrowLeftLine className='cursor-pointer text-xl' />
      </div>
<div className="text-lg font-semibold capitalize text-slate-300">editar deck</div>
</div>
      <form onSubmit={(e) => updateDeck(e,deckValuesUpdate?.title)}>
        <InputNameUpdate deckValues={deckValuesUpdate} handleChangeUpdateDeck={handleChangeUpdateDeck} />
        <DeckColorsUpdate deckValues={deckValuesUpdate} setDeckValues={setDeckValuesUpdate}/>
        <button className="w-full border bg-gradient-to-r p-2 rounded-md border-none text-slate-800 mt-3 capitalize font-semibold from-orange-400 to-red-600">guardar</button>
      </form>
    </div>
  )
}

export default UpdateDeck