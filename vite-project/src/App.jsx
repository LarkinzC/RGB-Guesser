import { useState, useEffect } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState('')
 const [answers, setAnswers] = useState([])
 const [selectionResult, setSelectionResult] = useState(false)

 const pickColor = () => {
  const actualColor = getRandomColor()
  setColor(actualColor)
  setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
 }

 const getRandomColor = () => {
  const digits = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  const color = new Array(6)
  .fill("")
  .map(() => digits[Math.floor(Math.random() * digits.length)])
  .join('')

    return `#${color}`
 }

 const handleAnswerClicked =  (answers) => {
    if(answers === color) {
      setSelectionResult(true)
      pickColor()
    } else {
      setSelectionResult(false)
    }
 }

  useEffect(() => {
    //Gen random color
    pickColor()
  }, [])

  return (
    <div className='App'>
      <div className='column'>
      <div className='guess-me'
      style={{ background: color }}></div>
      {answers.map(answers => (
        <button 
        onClick={() => handleAnswerClicked(answers)}
        key={answers}>{answers}</button>
      ))}
      { selectionResult === false && <div className='wrong'>Womp Womp</div>}
      { selectionResult === true && <div className='correct'>Hooray!</div>}
      </div>
    </div>
  )
}

export default App
