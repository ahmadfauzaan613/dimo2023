import React from 'react'

function Loading() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
