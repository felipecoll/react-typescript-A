type Props = {image: string}


export const RandomFox = ({image}: Props) => {

  return (
    <>
        <img width={320} height='auto' className='roundend' src={ image} alt='Zorritos meme' />
    </>
  )
}
