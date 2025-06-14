import { useState } from 'react'
import './App.css'
import { ManyPokemon } from './components/ManyPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ManyPokemon></ManyPokemon>
    </>
  )
}

export default App
