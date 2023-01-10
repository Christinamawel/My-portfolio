import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import projectsArray from "../projectsArray";
import homeIcon from '../img/home-icon.png';

function ProjectDetails({project, onBackClick}) {
  const { projectId } = useParams()
  project = projectsArray[projectId]
  const [hoverLinkStyles, setHoverLinkStyles] = useState({});

  const flowRootStyle = {
    display: 'flow-root'
  }

  const textBackgroundStyle = {
    backgroundColor: '#505050',
    position: 'absolute',
    width: '40em',
    height: '40em',
    borderRadius: '50%',
    zIndex: '-1',
    marginTop: '-15em',
    marginLeft: '-10em'
  }

  const textDivStyles = {
    color: 'white',
    width: '24em',
  }

  const homeButtonStyle = {
    position: 'absolute',
    margin: '1em'
  }

  const homeImgStyle = {
    width: '3em'
  }

  const fixHeaderMargin = {
    color: '#edb3a4',
    marginTop: '.25em',
    marginBottom: '.25em'
  }

  const textCenteringBox = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
    width: '29em',
    height: '25em',
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${project.detailImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-5'
  }

  const projectLinkDivStyle = {
    backgroundColor: '#edb3a4',
    display: 'flex',
    alignItems: 'center',
    fontSize: '2.5rem',
    textDecoration: 'none',
    color: '#505050',
    width: '7em',
    height: '7em',
    position: 'absolute',
    bottom: '.5em',
    right: '.5em',
    borderRadius: '50%',
  }

  const handleLinkHover = () => {
    setHoverLinkStyles({
      backgroundColor: '#ebad9d',
      cursor: 'pointer',
      color: 'white'
    })
  }

  const HandleLinkStopHover = () => {setHoverLinkStyles({})}

  return (
    <div style={flowRootStyle}>
      <div style={backgroundImageStyle}></div>
      <div style={textBackgroundStyle}></div>
      <Link to="/" style={homeButtonStyle}><img style={homeImgStyle} src={homeIcon}></img></Link>
      <div style={textCenteringBox}>
        <div style={textDivStyles}>
          <h1 style={fixHeaderMargin}>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      {project.link !== "no link" && <a href={project.link} target="_blank" style={{...projectLinkDivStyle, ...hoverLinkStyles}} onMouseEnter={handleLinkHover} onMouseLeave={HandleLinkStopHover}>
        <p style={{textAlign: 'center', paddingTop: '1em',}}>See Full Project! <br/> &#8594;</p>
      </a>}
    </div>
  )
}

export default ProjectDetails;