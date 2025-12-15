import React,{useState} from 'react'



export default function TextForm(props) {
 const [text, setText] = useState('');

 const handleUpClick = () => { 
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!","success");
 }



 const handleClearClick = () => {
  let newText = '';
  setText(newText);
  props.showAlert("Text is cleard!","success");

 }


 const handleLoClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
    props.showAlert("Converted to lowercase!","success");
 };

 const handleOnChange = (event)=>{
  setText(event.target.value)
 }


const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  // text.setSelectionRange());
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard","success");

}

const handleExtraSpaces = () => {
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!","success");

}


  const handleTitleCase = () => {
    const titleCased = text
      .toLowerCase()
      .split(" ")
      .filter(word => word.trim() !== "") // removes extra spaces
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(titleCased);
      props.showAlert("Converted to Title case","success");

  };


  return(
  <>
  <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>    
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#042743'
      } }  id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2 "  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick }>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Cleare Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
    <button className="btn btn-primary mx-2" onClick={handleTitleCase}>Convert to Title Case</button>
    {/* <button onClick={handleLowerCase}>lowercase</button> */}
  </div>

  <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743' } }   >
    <h2>Your text summary</h2>
    {/* <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
    <p>{0.008 * (text.trim().length > 0 ? text.trim().split(/\s+/).length : 0)} Minutes read</p> */}
     <p>
  {text.trim().length > 0
    ? text.trim().split(/\s+/).filter(word => word !== '').length
    : 0} words and {text.length} characters
     </p>
     <p>
     {0.008 *
    (text.trim().length > 0
      ? text.trim().split(/\s+/).filter(word => word !== '').length
      : 0)} Minutes read
    </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in text above to preview"}</p>
  </div>
  </>
 )
}





