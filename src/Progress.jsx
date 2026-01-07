import React from 'react'

const Progress = (props) => {

  return (

    
    <div>Progress
        <div  className="Progress" >
    <h3>File Upload Progress</h3>

   <progress value={props.progress} max="100">

   </progress>
    
</div>

    </div>
  )
}

export default Progress