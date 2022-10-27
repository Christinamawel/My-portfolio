import React, { useState } from "react";

function Carousel(props) {
  const [showingItems, setShowingItems] = useState([props.items[0], props.items[1], props.items[2]])

  const titleStyles = {
    fontSize: '2.2rem',
    marginLeft: '5vw',
    marginBottom: '0'  
  }

  const arrowStyles = {
    width: '20px',
    height: '20px',
    borderLeft: '5px solid #EFA18D',
    borderBottom: '5px solid #EFA18D',
  }
  
  const flexContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw',
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
    backgroundColor: '#EFA18D'
  }

  const lgCircleStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#EFA18D'
  }

  return (
    <div>
      <p style={titleStyles}>{props.title}</p>
      <div style={flexContainer}>
        <div style={{...arrowStyles, ...leftStyle}}/>
        <a href="google.com"><div style={smCircleStyle}></div></a>
        <a href="google.com"><div style={lgCircleStyle}></div></a>
        <a href="google.com"><div style={smCircleStyle}></div></a>
        <div style={{...arrowStyles, ...rightStyle}}/>
      </div>
    </div>
  )
}

export default Carousel;