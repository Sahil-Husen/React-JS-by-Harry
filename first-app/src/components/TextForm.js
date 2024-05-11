import React, { useState } from 'react'
import './TextForm.css'

export default function TextForm(props) {
    // useState
    // it is  a state in React JS that is used to manage the state of the UI any changes mad it also reflet to the UI.
    // const[text,setText] = useState('Enter any text here')
    // setText('text here')
    const [text, setText] = useState('')
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
    // copy butto code
    // const handlerCopy = () => {
    //     let copyText = document.getElementById('my-box');
    //     copyText.select();
    //     navigator.clipboard.writeText(copyText.value)
    //         .then(() => {
    //             alert('Text copied to clipboard!');
    //         })
    //         .catch((error) => {
    //             console.error('Error copying text:', error);
    //         });
    // }

    // Another copy Funtion
    /*
       const handlerCopy = () => {
        let copyText = document.getElementById('my-box');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
            
    }
    */


    // Function for copying the text available on the text area
    // also check whether is copy or not
    const handlerCopy = () => {
        let copyText = document.getElementById('my-box');
        let textToCopy = copyText.value.trim(); // Remove leading and trailing whitespace

        if (textToCopy) { // Check if there is non-empty text to copy
            copyText.select();
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Text copied to clipboard!');
                })
                .catch((error) => {
                    console.error('Error copying text:', error);
                });
        } else {
            alert('No text available to copy!');
        }
    }


    // Extra Space Remover
    const handlerSpace = () => {
        let textSpace = text.split(/[ ]+/);
        setText(textSpace.join(' '))

    }

    // Bold handler
    const handlerBold = () => {
        let boldText = document.getElementById('my-box');
        boldText.style.fontWeight = 'bold'; // Change '200px' to 'bold' to set the font weight
    }




    return (
        <>
            <div className='container'>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    {/* // IF WE NOT USE THEN IT IMOSSIBLE TO WRITE ON THE TEXT BOX */}
                    <textarea value={text} onChange={handlerOnClick} className="form-control fs-2" id="my-box" rows="7"></textarea>
                </div>

                <button className='btn btn-info mx-2' onClick={handlerUpClick} onDoubleClick={handlerLowClick}>Change to UppperCase</button>
                <button className='btn btn-info mx-3' onClick={handlerReset}>Clear</button>
                <button className='btn btn-info mx-2 my-4' onClick={handlerCopy}>Copy</button>
                <button className='btn btn-info mx-2 my-4' onClick={handlerSpace}>Remove Extra Space</button>
                <button className='btn btn-info mx-2 my-4' onClick={handlerBold}>Bold</button>


            </div>
            <div className="container my-3 summary">
                <h2>Your Text Summary</h2>
                <p>{wordCount} words and {charCount} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes Required to read.</p>
            </div>

        </>
    )
}
