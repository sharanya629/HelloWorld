import React, { useState } from 'react'

// const [Text, setText] = useState('Enter Text Here');

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearText = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied!", "success");

    }

    const handleExtraSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra spaces deleted!", "success");

    }
    //    text = "new text"; // Wrong way to change the state
    //    setText("new text"); //Correct way to change the state
    return (
        <>
        <div className= "container" style={{Color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
                color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text here</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}

