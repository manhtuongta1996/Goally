import React from 'react'

function LoadingScreen() {
  return (
    <div className="bg-grayApp rounded-3xl shadow-border p-8">
      <img src="/loading-screen-img.png" alt="" width={400} height={400} className="m-auto"/>
    </div>
  )
}

export default LoadingScreen