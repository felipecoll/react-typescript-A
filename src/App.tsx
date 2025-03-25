import { useState } from 'react'
import './App.css'
import { RandomFox } from './RandomFox'

  // Random para obtener zorros aleatorios entre 1 y 123
  const random = () => Math.floor(Math.random() * 123) + 1

function App() {

  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <>
      <h1>Imagenes de zorros aleatorios</h1>
      <p>Actualiza la pagina para ver una nueva imagen!</p>
      {/* <RandomFox image ={}/> */}
      {images.map((image, index) => (
          <div className="p-4" key={index}>
            <RandomFox image={image} />
          </div>
        ))}
    </>
  )
}

export default App
