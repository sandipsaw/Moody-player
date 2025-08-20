import React, { useState } from 'react'
import FaceDetection from './FaceDetection'
import Songs from './Songs'

const App = () => {

      const [musics, setmusics] = useState([])


  return (
    <div className='flex flex-col justify-center items-center'>
      <FaceDetection  setmusics={setmusics} />
      <Songs musics={musics} />
    </div>
  )
}

export default App