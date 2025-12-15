import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });


  const [btnText, setBtnText] = useState("Enable Dark Mode");

  
  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle}
              data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
              This is the first item's accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle}
              data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
              This is the second item's accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle}
              data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
              This is the third item's accordion body.
            </div>
          </div>
        </div>

      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
