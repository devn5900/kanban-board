import React from 'react'

const Progress = () => {
  const handleDrop=(e)=>{
    e.preventDefault();
    console.log(e.dataTransfer.getData("dropId"));
    console.log("first")
  }
  return (
    <div onDrop={handleDrop} onDragOver={()=>{console.log("drag")}} >Progress</div>
  )
}

export default Progress