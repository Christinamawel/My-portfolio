import React, { useState } from "react";

function Carousel(props) {
  const [showingItems, setShowingItems] = useState([props.items[0], props.items[1], props.items[2]])

  const titleStyles = {
    fontSize: '2.2rem',
    marginLeft: '5vw'  
  }

  const arrowStyles = {
    width: '20px',
    height: '20px',
    borderLeft: '3px solid #EFA18D',
    borderBottom: '3px solid #EFA18D',
    }

  const leftStyle = {
    transform: 'rotate(45deg)',
  }

  const rightStyle = {
    transform: 'rotate(225deg)',
  }

  return (
    <div>
      <p style={titleStyles}>{props.title}</p>
      <div style={{...arrowStyles, ...leftStyle}}/>
      <div style={{...arrowStyles, ...rightStyle}}/>
    </div>
  )
}

export default Carousel;