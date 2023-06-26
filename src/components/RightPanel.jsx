import React from 'react'
import TopBar from './RightPanel/TopBar'
import RightBody from './RightPanel/RightBody'
import Tasks from './Tasks/Tasks'
import DataContextProvider from '../context/DataContext'

const RightPanel = () => {
  return (
    <div className='w-11/12'>
      <TopBar/>
      <RightBody/>
      <DataContextProvider>
      <Tasks/>
      </DataContextProvider>
    </div>
  )
}

export default RightPanel