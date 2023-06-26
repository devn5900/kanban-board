import React, { createContext, useState } from 'react'
import {  onCompleted, onProgress, toDo } from '../utills/data';

export const DataContext= createContext();

const DataContextProvider = ({children}) => {
    const [todo,setTodo]= useState(toDo);
    const [progress,setProgress]= useState(onProgress);
    const [completed,setCompleted]= useState(onCompleted);
  return (
   <DataContext.Provider value={{todo,setTodo,progress,setProgress,completed,setCompleted}}>
    {children}
   </DataContext.Provider>
  )
}

export default DataContextProvider