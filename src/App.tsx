import { MouseEventHandler, useState } from 'react'
import './App.css'
import { RandomFox } from './RandomFox'

// Random para obtener zorros aleatorios entre 1 y 123
const random = () => Math.floor(Math.random() * 123) + 1

// Id random 
const generateId = () => Math.random().toString(36).substr(2, 9)

type ImageItems = {id: string, url: string}

function App() {

  const [images,setImages] = useState<Array<ImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const newItem = {id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`}
    setImages([...images, newItem])
  }

  return (
    <>
      <h1>Imagenes de zorros aleatorios</h1>
      <p>Actualiza la pagina para ver una nueva imagen!</p>

    <button onClick={addNewFox}>Agregar un nuevo zorro</button>

      {images.map(({id, url}) => (
          <div className="p-4" key={id}>
            <RandomFox image={url} />
          </div>
        ))}
    </>
  )
}

export default App
