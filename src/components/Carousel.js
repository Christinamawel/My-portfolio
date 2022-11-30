import React, { useEffect, useState } from "react";

function Carousel(props) {
  const [showingItems, setShowingItems] = useState([props.items[2], props.items[1], props.items[0]])
  const [leftClass, setLeftClass] = useState("");
  const [leftCircleLink, setLeftCircleLink] = useState(props.items[2].link);
  const [leftCircleText, setLeftCircleText] = useState(props.items[2].name);
  const [centerClass, setCenterClass] = useState("");
  const [centerCircleLink, setCenterCircleLink] = useState(props.items[1].link);
  const [centerCircleText, setCenterCircleText] = useState(props.items[1].name);
  const [rightClass, setRightClass] = useState("");
  const [rightCircleLink, setRightCircleLink] = useState(props.items[0].link);
  const [rightCircleText, setRightCircleText] = useState(props.items[0].name);
  const [invisibleLeftClass, setInvisibleLeftClass] = useState("");
  const [invisibleRightClass, setInvisibleRightClass] = useState("");
  const [flexClass, setFlexClass] = useState("");
  const [placeMarker, setPlaceMarker] = useState(3);
  const [placeMarkerCircles, setPlaceMarkerCircles] = useState([]);
  const [circleRightHoverStyle, setCircleRightHoverStyle] = useState({});
  const [circleCenterHoverStyle, setCircleCenterHoverStyle] = useState({});
  const [circleLeftHoverStyle, setCircleLeftHoverStyle] = useState({});

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

  const circleTextStyles = {
    textAlign:'center',
    color: 'black',
    backgroundColor: 'rgb(225,225,225, .7)',
    borderRadius: '50%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    boxSizing: 'border-box'
  }

  const smallCircleTextStyles = {
    width: '300px',
    height: '300px',
    fontSize: '1.7rem',
  }

  const centerCircleTextStyles = {
    width: '420px',
    height: '420px',
    fontSize: '2rem'
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

  let smCircleLeftStyle = {
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

  if (props.items[placeMarker]) {
    invisibleStyleLeft = {...invisibleStyleLeft, ...{backgroundImage:`url(${props.items[placeMarker].img})`}}
  }

  let invisibleStyleRight = {
    width: '1px',
    height: '1px',
    borderRadius: '50%',
    backgroundSize: 'cover'
  }

  if (props.items[placeMarker - 4]) {
    invisibleStyleRight = {...invisibleStyleRight, ...{backgroundImage:`url(${props.items[placeMarker - 4].img})`}}
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
    if(placeMarker === props.items.length) {
      return
    }
    setLeftClass("carousel-left-to-center");
    setCenterClass("carousel-center-to-right");
    setRightClass("carousel-right-Disappear");
    setInvisibleLeftClass("carousel-left-appear");
    setFlexClass("low-right-z-index");

    setTimeout(() => {
    setLeftClass("");
    setCenterClass("");
    setRightClass("");
    setLeftCircleLink(props.items[placeMarker].link);
    setLeftCircleText(props.items[placeMarker].name);
    setCenterCircleLink(props.items[placeMarker - 1].link);
    setCenterCircleText(props.items[placeMarker - 1].name);
    setRightCircleLink(props.items[placeMarker - 2].link);
    setRightCircleText(props.items[placeMarker - 2].name);
    invisibleStyleLeft = {
      width: '1px',
      height: '1px',
      borderRadius: '50%'
    }
    setFlexClass("")
    setInvisibleLeftClass("");
    setShowingItems([props.items[placeMarker], props.items[placeMarker - 1], props.items[placeMarker - 2]])
    setPlaceMarker(prevState => prevState + 1)
    }, "720");
  }

  const handleLeftClick = () => {
    if(placeMarker === 3) {
      return
    }
    setRightClass("carousel-right-to-center");
    setCenterClass("carousel-center-to-left");
    setLeftClass("carousel-left-Disappear");
    setInvisibleRightClass("carousel-right-appear");

    setTimeout(() => {
    setLeftClass("");
    setCenterClass("");
    setRightClass("");
    setLeftCircleLink(props.items[placeMarker - 2].link);
    setLeftCircleText(props.items[placeMarker - 2].name);
    setCenterCircleLink(props.items[placeMarker - 3].link);
    setCenterCircleText(props.items[placeMarker - 3].name);
    setRightCircleLink(props.items[placeMarker - 4].link);
    setRightCircleText(props.items[placeMarker - 4].name);
    invisibleStyleRight = {
      width: '1px',
      height: '1px',
      borderRadius: '50%'
    }
    setInvisibleRightClass("");
    setShowingItems([props.items[placeMarker - 2], props.items[placeMarker - 3], props.items[placeMarker - 4]]);
    setPlaceMarker(prevState => prevState - 1)
    }, "720");
  }

  const handleLeftMouseHover = () => {
    setCircleLeftHoverStyle({display: 'flex'})
  }

  const handleLeftMouseLeave = () => {
    setCircleLeftHoverStyle({display: 'none'})
  }

  const handleCenterMouseHover = () => {
    setCircleCenterHoverStyle({display: 'flex'})
  }

  const handleCenterMouseLeave = () => {
    setCircleCenterHoverStyle({display: 'none'})
  }

  const handleRightMouseHover = () => {
    setCircleRightHoverStyle({display: 'flex'})
  }

  const handleRightMouseLeave = () => {
    setCircleRightHoverStyle({display: 'none'})
  }

  return (
      <div>
        <p style={titleStyles}>{props.title}</p>
        <div className={flexClass} style={flexContainer}>
          <div onClick={handleLeftClick} style={{...arrowStyles, ...leftStyle}}/>
          <div className={invisibleLeftClass} id="left-invisible" style={invisibleStyleLeft}></div>
          <a href={leftCircleLink} style={{textDecoration: 'none'}}>
            <div className={leftClass} id="left-circle" style={{...smCircleStyle, ...smCircleLeftStyle}} onMouseEnter={handleLeftMouseHover} onMouseLeave={handleLeftMouseLeave}>
              <div style={{...circleTextStyles, ...smallCircleTextStyles,...circleLeftHoverStyle}}><p>{leftCircleText}</p></div>
            </div>
          </a>
          <a href={centerCircleLink} style={{textDecoration: 'none'}}>
            <div className={centerClass} id="center-circle" style={lgCircleStyle} onMouseEnter={handleCenterMouseHover} onMouseLeave={handleCenterMouseLeave}>
              <div style={{...centerCircleTextStyles,...circleTextStyles,...circleCenterHoverStyle}}>{centerCircleText}</div>
            </div>
          </a>
          <a href={rightCircleLink} style={{textDecoration: 'none'}}>
            <div className={rightClass} id="right-circle" style={{...smCircleStyle, ...smCircleRightStyle}} onMouseEnter={handleRightMouseHover} onMouseLeave={handleRightMouseLeave}>
              <div style={{...circleTextStyles, ...smallCircleTextStyles,...circleRightHoverStyle}}>{rightCircleText}</div>
            </div>
          </a>
          <div className={invisibleRightClass} id="right-invisible" style={invisibleStyleRight}></div>
          <div onClick={handleRightClick} style={{...arrowStyles, ...rightStyle}}/>
        </div>
        <div style={carouselPlaceMarkerStyles}>{placeMarkerCircles}</div>
      </div>
  )
}

export default Carousel;