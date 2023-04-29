import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import Sidebar from './Sidebar'

function MainContainer() {
  return (
    <div className='flex'>
      <Sidebar/>
    <div>
        <ButtonList/>
        <VideoContainer/>
    </div>
    </div>
  )
}

export default MainContainer