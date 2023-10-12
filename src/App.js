import React, {useState} from "react";
import './style.css';

const App=()=>{
    const [diceNumber, setDiceNumber] = useState(5)
    const refreshDice = () =>{
        const ran = Math.floor(Math.random()*6)+1
        setDiceNumber(ran)
    }
    return <div>
        <h1>Welcome to Dice roller!</h1>
        <img src={require(`./assets/${diceNumber}.png`)}></img><br></br>
        <button onClick={()=>refreshDice()} className="button">Roll</button>
    </div>
}

export default App;