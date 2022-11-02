import React, { useState } from "react";

function Carousel(props) {
  const [showingItems, setShowingItems] = useState([props.items[0], props.items[1], props.items[2]])
  const [leftClass, setLeftClass] = useState("");
  const [centerClass, setCenterClass] = useState("");
  const [rightClass, setRightClass] = useState("");
  const [invisibleLeftClass, setInvisibleLeftClass] = useState("");
  const [invisibleRightClass, setInvisibleRightClass] = useState("");

  const titleStyles = {
    fontSize: '2.2rem',
    marginLeft: '5vw',
    marginBottom: '0'  
  }

  const arrowStyles = {
    minWidth: '20px',
    minHeight: '20px',
    borderLeft: '5px solid #EFA18D',
    borderBottom: '5px solid #EFA18D',
  }
  
  let flexContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2%'
  }

  const leftStyle = {
    transform: 'rotate(45deg)',
  }

  const rightStyle = {
    transform: 'rotate(225deg)',
  }

  const smCircleStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#EFA18D',
  }

  const lgCircleStyle = {
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    backgroundColor: '#EFA18D',
  }

  let invisibleStyleLeft = {
    width: '1px',
    height: '1px',
    borderRadius: '50%',
  }

  let invisibleStyleRight = {
    width: '1px',
    height: '1px',
    borderRadius: '50%',
  }

  const handleRightClick = () => {
    setLeftClass("carousel-left-to-center");
    setCenterClass("carousel-center-to-right");
    setRightClass("carousel-right-Disappear");
    invisibleStyleLeft = {...invisibleStyleLeft, ...{backgroundColor:'#EFA18D'}}
    setInvisibleLeftClass("carousel-left-appear");

    setTimeout(() => {
    setLeftClass("");
    setCenterClass("");
    setRightClass("");
    invisibleStyleLeft = {
      width: '1px',
      height: '1px',
      borderRadius: '50%'
    }
    setInvisibleLeftClass("");
    }, "750");
  }

  const handleLeftClick = () => {
    setRightClass("carousel-right-to-center");
    setCenterClass("carousel-center-to-left");
    setLeftClass("carousel-left-Disappear");
    invisibleStyleRight = {...invisibleStyleRight, ...{backgroundColor:'#EFA18D'}}
    setInvisibleRightClass("carousel-right-appear");

    setTimeout(() => {
    setLeftClass("");
    setCenterClass("");
    setRightClass("");
    invisibleStyleRight = {
      width: '1px',
      height: '1px',
      borderRadius: '50%'
    }
    setInvisibleRightClass("");
    }, "750");
  }

  return (
    <div>
      <p style={titleStyles}>{props.title}</p>
      <div style={flexContainer}>
        <div onClick={handleLeftClick} style={{...arrowStyles, ...leftStyle}}/>
        <div className={invisibleLeftClass} id="left-invisible" style={invisibleStyleLeft}></div>
        <a href="google.com"><div className={leftClass} id="left-circle" style={smCircleStyle}></div></a>
        <a href="google.com"><div className={centerClass} id="center-circle" style={lgCircleStyle}></div></a>
        <a href="google.com"><div className={rightClass} id="right-circle" style={smCircleStyle}></div></a>
        <div className={invisibleRightClass} id="right-invisible" style={invisibleStyleRight}></div>
        <div onClick={handleRightClick} style={{...arrowStyles, ...rightStyle}}/>
      </div>
    </div>
  )
}

export default Carousel;