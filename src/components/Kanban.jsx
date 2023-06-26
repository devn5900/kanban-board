import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Kanban = () => {
  return (
    <div>
        <div className=' flex h-full rounded-md m-1 bg-white  border-2'>
            <LeftPanel/>
            <RightPanel/>
        </div>
    </div>
  )
}

export default Kanban