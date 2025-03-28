import { useRef } from "react"

type Props = {image: string}


export const RandomFox = ({image}: Props) => {
    const node = useRef<HTMLImageElement>(null)

    // Lazy loading hara uso en esta seccion

  return (
    <>
        <img ref={node} width={320} height='auto' className='roundend' src={ image} alt='Zorritos meme' />
    </>
  )
}
