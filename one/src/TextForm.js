import React,{useState} from 'react'


export default function (props) {

const handleOnChange = (event) => {
    setText(event.target.value);
}

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
}

const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClear = () => {
    setText("");
}

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}

const [text,setText] = useState("");

  return (
      <>
    <div className = "container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1 className = "my-3">{props.heading}</h1>
        <div className="mb-3">
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} id="myBox" rows="8" style = {{backgroundColor: props.mode ==='dark'? '#212529':'white',color: props.mode==='dark'?'white':'black'}} onChange = {handleOnChange}></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary mx-1" onClick = {handleDownClick}>Convert to Lowercase</button>
        <button className = "btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
        <button className = "btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
    </div>

    <div className = "container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>You have {text.split(" ").length} words and {text.length} characters.</p>
    <p>Time required to read the text is {0.008*text.split(" ").length} minutes.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview here."}</p>
    </div>
    </>
  )
}
