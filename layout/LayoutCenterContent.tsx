interface Props{
  children: JSX.Element[] | JSX.Element
}
const LayoutCenterContent = ({ children }: Props) => {
  return (
    <div className='w-full xl:w-[1200px] xl:mx-auto'>
        {children}
    </div>
)
}

export default LayoutCenterContent