import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid} from 'nanoid'
import './App.css'

export default function App() {

const [dice, setDice] = useState(allDice)
const [tenzies, setTenzies] = useState(false)

React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [dice])

function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()// it wii log warning 'two component with same id if () if ignored
    }
}

    function allDice () {
        let newDice = []
        for(let i=0; i < 10; i++){
            
            newDice.push(generateNewDie)
        }
        return newDice
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }


   function holdDice (id) {
  setDice(oldDice => oldDice.map(die => {
    return die.id === id ? {...die, isHeld: !die.isHeld} : die
  }))

   }


   
    let dieElement = dice.map(die => <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}  
        holdDice={()=> holdDice(die.id)} />)

   

  return (
    <div>
        <div className='die-container'>{dieElement}</div>
        <button onClick={rollDice} className='dice-button'>Roll Dice</button>
    </div>
  )
}

