import React, { useState } from 'react'

export default function TextForm(props) {
    // useState
    // it is  a state in React JS that is used to manage the state of the UI any changes mad it also reflet to the UI.
    // const[text,setText] = useState('Enter any text here')
    // setText('text here')
    const [text, setText] = useState('Enter any text')
    const [wordCount, setWordCount] = useState(0);
const [charCount, setCharCount] = useState(0);

    // text = "new text" this is a wrong w  ay to change the TEXT VARIABLE OR STATE IN REACT JS
    // setText("New text here")

    // ONCLICK HANDLER
    const handlerUpClick = () => {
        // console.log(" Uppercase button clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlerOnClick = (event) => {
        setText(event.target.value);
        const words = event.target.value.trim().split(/\s+/);
        setWordCount(words.length);
        setCharCount(event.target.value.length);
    }
    
    const handlerLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handlerReset = () => {
        setText('');
        setWordCount(0);
        setCharCount(0);
    }
    

    return (
      <>
        <div className='container'>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                {/* // IF WE NOT USE THEN IT IMOSSIBLE TO WRITE ON THE TEXT BOX */}
                <textarea value={text} onChange={handlerOnClick} className="form-control" id="my-box" rows="10"></textarea>
            </div>
             
            <button className='btn btn-info' onClick={handlerUpClick} onDoubleClick={handlerLowClick}>Change to UppperCase</button>
            <button className='btn btn-info' onClick={handlerReset}>Reset</button>
           
        </div>
        <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{wordCount} words and {charCount} characters.</p>
</div>

      </>
    )
}
