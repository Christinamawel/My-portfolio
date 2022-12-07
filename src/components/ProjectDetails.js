import React from "react";

function ProjectDetails({project, onBackClick}) {

  const handleBackClick = () => {
    onBackClick()
  }

  const flowRootStyle = {
    display: 'flow-root'
  }

  const projectDivStyles = {
    color: 'white',
    padding: '5em',
    marginTop: '20vh',
    borderTopRightRadius: '10em',
    borderBottomRightRadius: '10em',
    width: '25vw'
  }

  const backgroundStyle = {
    backgroundColor: '#505050',
    zIndex: '-4',
    position: 'absolute',
    width: '35vw',
    height: '100vh',
    borderTopRightRadius: '7em',
    borderBottomRightRadius: '7em'
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${project.detailImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    width: '72vw',
    height: '100vh',
    marginLeft: '28vw',
    zIndex: '-5'
  }

  return (
    <div style={flowRootStyle}>
      <div style={backgroundStyle}></div>
      <div style={backgroundImageStyle}></div>
      <button onClick={handleBackClick}>Go back</button>
      <div style={projectDivStyles}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a href={project.link}>See Project</a>
      </div>
    </div>
  )
}

export default ProjectDetails;