import React , {useState} from "react";
import "./EightBall.css";


let answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },

]
const EightBall = (props) => {
    const getRandom = () => Math.floor( Math.random(answers) * answers.length );
    const[guess, setGuess] = useState(getRandom());
    const[color, setColor] = useState(answers[guess].color);
    const[msg, setMsg] = useState(answers[guess].msg);
    
    const isColor = (props) => {
        if(color === "green"){
            return "green";
        }else
        if (color === "red"){
            return "red";
        }
    }

    const makeGuess =() => {
        setGuess(getRandom());
        setColor(answers[guess].color);
        setMsg(answers[guess].msg);
    }

    return(
        <div>
            <h1> Magic Eight Ball </h1>
            <h2 className= {isColor ? 'green' : 'red'} >
                
                 {msg}</h2>
            
            <button onClick={makeGuess}> Ask the Magic Eight Ball </button>

        </div>
    )


}

export default EightBall;