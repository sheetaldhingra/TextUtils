import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick=()=>{
      setText(text.toUpperCase());
      props.showAlert("Converted to Upper Case", "success");
    }
    const handledownClick = () => {
      setText(text.toLowerCase());
      props.showAlert("Converted to Lower Case", "success");
    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const handleclearClick=()=>{
      setText("");
      props.showAlert("Text cleared", "success");
    }
    const handlecopy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
  return (
    <>
    <div className="container">
    <h1 style={{color: props.mode === "light" ? 'black' : 'white'}}>{props.heading}</h1>
<div className="m-3">
  <textarea className="form-control" id="Textarea" value={text} style={{backgroundColor: props.mode === "light" ? 'white' : 'grey',
color: props.mode === "light" ? 'black' : 'white', border: props.mode === "light" ? '2px solid black' : '2px solid white'}} placeholder={text} onChange={handleOnChange} rows="9"></textarea>
</div>
<button type="button" className={`btn btn-${props.mode === "light" ? 'dark' : 'light'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className={`btn btn-${props.mode === "light" ? 'dark' : 'light'} mx-1`}  onClick={handledownClick}>Convert to Lowercase</button>
<button type="button" className={`btn btn-${props.mode === "light" ? 'dark' : 'light'} mx-1`}  onClick={handleclearClick}>Clear Text</button>
<button type="button" className={`btn btn-${props.mode === "light" ? 'dark' : 'light'} mx-1`}  onClick={handlecopy}>Copy to clipboard</button>
<button type="button" className={`btn btn-${props.mode === "light" ? 'dark' : 'light'} mx-1`}  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode === "light" ? 'black' : 'white'}}>
  <h2>Your text summary</h2>
  <p><strong>{text.split(' ').length - 1} words and {text.length} character</strong></p>
  <p>{0.008 * (text.split(' ').length - 1)} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
</div>
</>
  )
}
