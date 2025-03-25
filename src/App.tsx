import './App.css'
import { RandomFox } from './RandomFox'

// Random para obtener zorros aleatorios entre 1 y 123

const random = Math.floor(Math.random() * 123) + 1

function App() {
  
  return (
    <>
      <h1>Imagenes de zorros aleatorios</h1>
      <p>Actualiza la pagina para ver una nueva imagen!</p>
      <RandomFox image ={`https://randomfox.ca/images/${random}.jpg`}/>
    </>
  )
}

export default App
