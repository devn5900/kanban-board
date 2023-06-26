import React, { useContext, useState } from 'react'
import Todo from './Todo'
import Progress from './Progress'
import Done from './Done'
import { DataContext } from '../../context/DataContext'

const Tasks = () => {
    const {todo,progress,completed} = useContext(DataContext);
  return (
    <div className="px-7">
        <div className='grid grid-cols-3 gap-6 '>
            <Todo text={"Todo"} color={"bg-[#5030E5]"} data={todo}  icon={true} />
            <Todo text={"Progress"} color={"bg-[#FFA500]"} data={progress}  icon={false} />
            <Todo text={"Done"} color={"bg-[#76A5EA]"} data={completed} lineColor={"bg-[#8BC48A]"}  icon={false} />
          
            {/* <Progress/>
            <Done/> */}
        </div>
    </div>
  )
}

export default Tasks