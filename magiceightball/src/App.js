import React from "react";
import { useState } from "react";
import "./styles.css";
import { FaMagic } from 'react-icons/fa';



function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [errorMessage, setErrorMeessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageSrc, setImageSrc] =useState("");

    const handleChange = (e) => {
      setQuestion(e.target.value);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(question.slice(-1) !== '?' || question === ""){
        setErrorMeessage("You didn't ask a question!");
        setIsLoading(false);
        return;
      } else {
        setErrorMeessage("");
        setIsLoading(true);
        setAnswer("");
        fetch("https://yesno.wtf/api")
          .then((response) => response.json())
          .then((data) => {
            setAnswer(data.answer);
            setImageSrc(data.image);
            setIsLoading(false);
            console.log(data);
          }).catch((error) => {
            setErrorMeessage("Error: " + error.message);
            setIsLoading(false);
            console.log(error);
          }
          );
      }
    }

  return (
    <div className="App">
      <h1 className="pTitle pAnimation">Magic 8 Ball <FaMagic></FaMagic></h1> 
      <h2 className="pQuestion">Ask your question.</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" onChange={handleChange} placeholder=""/>
        <br></br>
        <button className="" type="submit">Ask!</button>
        {errorMessage ? <p>{errorMessage}</p> : null}
        {isLoading ? <p>Loading...</p> : null}
        {answer ? 
          <div>
          <p>Q: {question}</p>
           <p>A: {answer} </p>
           <img src={imageSrc} alt=""></img>
         </div>
        : null}
      </form>
    </div>
  );
}

export default App;

/*
Implementation steps
1) Add input element to JSX
2) Input should be controlled with state (implement proper event handler)
3) Add a button to submit the question to JSX
4) Add event handler of the button
5) As a result of submitting: show the question, answer in text, and answer as image at below
6) API endpoint is: https://yesno.wtf/api and example output:
  {
    "answer":"yes",
    "forced":false,
    "image":"https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"
  }
7) Make asked question, answer and answer image as new component in different file.
8) Display an error message ("You didn't ask a question"), if user didn't write "?"(question mark) in the input.

Good to have:
- Make your code ES6 compatible
- Prefer stateless functional components over class components if you can
- Using React Hooks instead of class components
*/
