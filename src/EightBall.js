import React , {useState} from "react";
import "./EightBall.css";


//initial message will be "Think of a Question"
//const [message, setMessage] = useState("Think of a Question");

//initial color will be black
//const [color, setColor] = useState("black");

//there will be a function to choose a random answer from an array of answers
//function chooseAnswer() {
    //let randomIndex = Math.floor(Math.random() * answers.length);
    //let randomAnswer = answers[randomIndex];
    //return randomAnswer;
    //}

// we need a function to match the answer(message) with the color. each message has it's own color,
//so the color needs to change when the answer changes.
//function matchAnswer() {
    // const { msg , color } = chooseAnswer();
    // setMessage(msg);
    //

// need to write all of them in a function and return tem in a div to show.


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
    { msg: "Very doubtful.", color: "red" }
  ];


  function chooseAnswer(answers){
    const randomIndex = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomIndex];
    return randomAnswer;
}



function EightBall() {
    //initial message will be "Think of a Question"
    const [msg, setMessage] = useState("Think of a Question");

    //initial color will be black
    const [color, setColor] = useState("black");

    function matchAnswer() {
        const { msg , color } = chooseAnswer();
        setMessage(msg);
        setColor(color);

}
    return(
      <div>
        <h1> Magic Eight Ball </h1>
        <div className = "EightBall" onClick = {matchAnswer} style ={{backgroundColor:color}}>
        
            <h1>{msg}</h1>
        </div>
      </div>
    );

}

export default EightBall;