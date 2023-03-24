import './App.css'
import { Button } from './components/Button'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'
import getRandomBackground from './utils/getRandomBackground'

function App() {
  
  const phrase = getRandomArray(phrases)
  const number = getRandomBackground()
  
  return (
    <div className="App">
      <div className='container'>
        <div className='card__fortuna'>
          <h1 className='card__title'> GALLETAS DE LA <br /> FORTUNA</h1>
          <Button phrases={phrases} phrase={phrase} />
        </div>
      </div>
    </div>
  )
}

export default App
