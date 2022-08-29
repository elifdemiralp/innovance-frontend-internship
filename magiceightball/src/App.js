import React from "react";
import { useState } from "react";
import "./styles.css";
import { FaMagic } from 'react-icons/fa';
import Answer from "./components/Answer";
import {StyledBody, StyledButton, StyledInput, StyledQuestion, StyledTitle} from "./styles";

function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [errorMessage, setErrorMeessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageSrc, setImageSrc] =useState("");

    const handleChange = (e) => {
      setQuestion(e.target.value);
    }

    const fetchData = async () => {
    
      const response = await fetch("https://yesno.wtf/api");
    
      if(!response.ok){
        setIsLoading(false);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.answer);
      setImageSrc(data.image);
      setIsLoading(false);
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
        fetchData();
      }
    }

  return (
    <StyledBody>
      <StyledTitle>Magic 8 Ball <FaMagic></FaMagic> </StyledTitle> 
      <StyledQuestion>Ask your question.</StyledQuestion>
      <form onSubmit={handleSubmit}>
      <StyledInput className="input" type="text" onChange={handleChange} placeholder=""/>
        <br></br>
        <StyledButton className="" type="submit">Ask!</StyledButton>
        {errorMessage ? <p>{errorMessage}</p> : null}
        {isLoading ? <p>Loading...</p> : null}
        {answer ? 
          <div>
          <Answer question={question} answer={answer} imageSrc={imageSrc}></Answer>
         </div>
        : null}
      </form>
    </StyledBody>
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
