import React, { useEffect, useState } from "react";

function Carousel(props) {
  const [showingItems, setShowingItems] = useState([props.items[0], props.items[1], props.items[2]])
  const [leftClass, setLeftClass] = useState("");
  const [centerClass, setCenterClass] = useState("");
  const [rightClass, setRightClass] = useState("");
  const [invisibleLeftClass, setInvisibleLeftClass] = useState("");
  const [invisibleRightClass, setInvisibleRightClass] = useState("");
  const [flexClass, setFlexClass] = useState("");
  const [placeMarker, setPlaceMarker] = useState(3);
  const [placeMarkerCircles, setPlaceMarkerCircles] = useState([]);

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
    backgroundSize: 'cover'
  }

  const smCircleLeftStyle = {
    backgroundImage: `url(${showingItems[0].img})`
  }

  const smCircleRightStyle = {
    backgroundImage: `url(${showingItems[2].img})`
  }

  const lgCircleStyle = {
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    backgroundImage: `url(${showingItems[1].img})`,
    backgroundSize: 'cover'
  }

  let invisibleStyleLeft = {
    width: '1px',
    height: '1px',
    borderRadius: '50%',
    backgroundSize: 'cover'
  }

  if (props.items[placeMarker - 4]) {
    invisibleStyleLeft = {...invisibleStyleLeft, ...{backgroundImage:`url(${props.items[placeMarker - 4].img})`}}
  }
  

  let invisibleStyleRight = {
    width: '1px',
    height: '1px',
    borderRadius: '50%',
    backgroundSize: 'cover'
  }

  if (props.items[placeMarker]) {
    invisibleStyleRight = {...invisibleStyleRight, ...{backgroundImage:`url(${props.items[placeMarker].img})`}}
  }

  let placeMarkerCircleStyles = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '2px solid black',
  }

  let filledPlaceMarkerCircleStyle = {
    backgroundColor: '#EFA18D'
  }

  useEffect(() => {
    setPlaceMarkerCircles([])
    for(let i = 3; i <= props.items.length; i++) {
      if(i === placeMarker || (placeMarker >= props.items.length && i === props.items.length)|| (placeMarker === 3 && i === 3)) {
        setPlaceMarkerCircles(prevState => [...prevState, <div key={i} style={{...placeMarkerCircleStyles,...filledPlaceMarkerCircleStyle}}></div>])
      } else {
        setPlaceMarkerCircles(prevState => [...prevState, <div key={i} style={placeMarkerCircleStyles}></div>])
      }
    }
  }, [placeMarker])

  const carouselPlaceMarkerStyles = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    margin: '15px 0'
  }

  const handleRightClick = () => {
    if(placeMarker !== props.items.length) {
      setPlaceMarker(prevState => prevState + 1)
    } else {
      return
    }
    console.log("ran right");
    setLeftClass("carousel-left-to-center");
    setCenterClass("carousel-center-to-right");
    setRightClass("carousel-right-Disappear");
    setInvisibleLeftClass("carousel-left-appear");
    setFlexClass("low-right-z-index");

    setTimeout(() => {if (props.items[placeMarker - 4]) {
      invisibleStyleLeft = {...invisibleStyleLeft, ...{border: '5px solid red'}}
    }}, "500")


    setTimeout(() => {
    setLeftClass("");
    setCenterClass("");
    setRightClass("");
    invisibleStyleLeft = {
      width: '1px',
      height: '1px',
      borderRadius: '50%'
    }
    setFlexClass("")
    setInvisibleLeftClass("");
    setShowingItems([props.items[placeMarker - 3], props.items[placeMarker - 2], props.items[placeMarker - 1]])
    }, "750");
  }

  const handleLeftClick = () => {
    if(placeMarker !== 3) {
      setPlaceMarker(prevState => prevState - 1)
    } else {
      return
    }
    console.log("ran left");
    setRightClass("carousel-right-to-center");
    setCenterClass("carousel-center-to-left");
    setLeftClass("carousel-left-Disappear");
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
    setShowingItems([props.items[placeMarker - 3], props.items[placeMarker - 2], props.items[placeMarker - 1]]);
    console.log(showingItems);
    }, "750");
  }

  return (
    <div>
      <p style={titleStyles}>{props.title}</p>
      <div className={flexClass} style={flexContainer}>
        <div onClick={handleLeftClick} style={{...arrowStyles, ...leftStyle}}/>
        <div className={invisibleLeftClass} id="left-invisible" style={invisibleStyleLeft}></div>
        <a href="google.com"><div className={leftClass} id="left-circle" style={{...smCircleStyle, ...smCircleLeftStyle}}></div></a>
        <a href="google.com"><div className={centerClass} id="center-circle" style={lgCircleStyle}></div></a>
        <a href="google.com"><div className={rightClass} id="right-circle" style={{...smCircleStyle, ...smCircleRightStyle}}></div></a>
        <div className={invisibleRightClass} id="right-invisible" style={invisibleStyleRight}></div>
        <div onClick={handleRightClick} style={{...arrowStyles, ...rightStyle}}/>
      </div>
      <div style={carouselPlaceMarkerStyles}>{placeMarkerCircles}</div>
    </div>
  )
}

export default Carousel;