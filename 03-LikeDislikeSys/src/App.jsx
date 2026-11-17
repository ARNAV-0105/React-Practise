import React, { useState } from 'react'
import { RiThumbUpFill, RiThumbDownFill } from "@remixicon/react";


const App = () => {

  const [reaction, setReaction] = useState(null)
  const initialLikes = 10
  const initialDislikes=2
  const likeCount = initialLikes + (reaction === 'like'? 1:0)
  const dislikeCount = initialDislikes + (reaction === 'dislike'? 1:0)

  return (
    <div className='bg-black h-screen w-full p-10 text-white'>
      {/* Post Div */}
      <div className='bg-red-500 h-70 w-80 rounded overflow-hidden'>
        <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1773330123668-e3bcd61a2505?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      </div>
      <div className='bg-white w-80 rounded text-black'>
          {/* Like/Dislike Div */}
          <div className=' w-80 h-15 mt-3 rounded overflow-hidden flex'>
            <div className='w-1/2 flex '>
              <div className=' h-20 w-20 px-7 py-2'>
                <button className='active:scale-90 w-full'
                onClick={()=>{
                  setReaction(reaction => reaction === "like" ? null : "like")
                }}><RiThumbUpFill className={`${reaction === "like" ? "text-blue-600" : "text-black"}`} /></button>
                <h2 className='font-semibold text-center'>{likeCount}</h2>
              </div>
              <div className='h-20 w-20 px-7 py-2'>
                <button className='active:scale-90 w-full'
                onClick={()=>{
                  setReaction(reaction => reaction === "dislike" ? null : "dislike")
                }}><RiThumbDownFill className={`${reaction === "dislike" ? "text-red-600" : "text-black"}`} /></button>
                <h2 className='font-semibold text-center'>{dislikeCount}</h2>
              </div>
            </div>
          </div>
          {/* Title+Description */}
          <div className='h-15 w-80 rounded mt-3 px-3 py-2'>
            <h4 className='font-bold'>Post Title</h4>
            <h1 className='font-light text-xs'>Post Description</h1>
          </div>
      </div>
    </div>
  )
}

export default App