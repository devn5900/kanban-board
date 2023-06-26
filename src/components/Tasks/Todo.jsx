import React, { useContext, useState } from "react";
import Info from "./Info";
import TodoCard from "./TodoCard";
import { DataContext } from "../../context/DataContext";
const Todo = ({text,color,icon,lineColor,data}) => {
  const {todo,progress,completed,setTodo,setProgress,setCompleted} = useContext(DataContext);
  const handleDragOver=(e)=>{
      e.preventDefault();
  }
  const handleDrop=(e)=>{
    e.preventDefault();
    let id=e.dataTransfer.getData("dropId");
    let from= e.dataTransfer.getData("from");
    let to = e.currentTarget.id;
    console.log(id,from,to)
    if(from=="Todo"){
      const find= todo.find((el)=>el.id==id);
      const filter= todo.filter((el)=>el.id!==+id);
      setTodo(filter);
      if(to=="Progress"){
        setProgress([{...find,priority:"High"},...progress])
      }
      if(to=="Done"){
        setCompleted([{...find,priority:"Completed"},...completed])
      }
    }
    if(from=="Progress"){
      const find= progress.find((el)=>el.id==id);
      const filter= progress.filter((el)=>el.id!==+id);
      setProgress(filter);
      if(to=="Todo"){
        setTodo([{...find,priority:"Low"},...todo])
      }
      if(to=="Done"){
        setCompleted([{...find,priority:"Completed"},...completed])
      }
    }
    if(from=="Done"){
      const find= completed.find((el)=>el.id==id);
      const filter= completed.filter((el)=>el.id!==+id);
      setCompleted(filter);
      if(to=="Todo"){
        setTodo([{...find,priority:"Low"},...todo])
      }
      if(to=="Progress"){
        setProgress([{...find,priority:"High"},...progress])
      }
    }
  }
  return (
    <div id={text} droppeble={true}  onDrop={(e)=>{handleDrop(e)}} onDragOver={handleDragOver} className="px-4 py-5 bg-[#F5F5F5] rounded-3xl " >
      <div>
        <Info text={text} color={color} icon={icon} lineColor={lineColor} length={data.length} />
        <div className="flex flex-col gap-3"  >
          {
            data.map((el)=>{
             return <TodoCard {...el} location={text} />          

            })
          }
        </div>
      </div>
    </div>
  );
};

export default Todo;
