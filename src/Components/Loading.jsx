import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen" role="status" aria-label="Memuat data">
      <div className="lds-ring" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
