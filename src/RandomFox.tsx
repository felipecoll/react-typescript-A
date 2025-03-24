
// Random para obtener zorros aleatorios entre 1 y 123

const random = Math.floor(Math.random() * 123) + 1


export const RandomFox = () => {

    const image = `https://randomfox.ca/images/${random}.jpg`

  return (
    <>
        <img width={320} height='auto' className='roundend' src={image} alt='Zorritos meme' />
    </>
  )
}
