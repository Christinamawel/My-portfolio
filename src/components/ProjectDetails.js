import React from "react";

function ProjectDetails({project, onBackClick}) {

  const handleBackClick = () => {
    onBackClick()
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <button onClick={handleBackClick}>Go back</button>
    </div>
  )
}

export default ProjectDetails;