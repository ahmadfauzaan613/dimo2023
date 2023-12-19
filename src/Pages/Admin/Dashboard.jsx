import React from 'react'
import undraw from '../../Images/undraw-bg2.png'
import Title from '../../Components/Title'

function Dashboard() {
  return (
    <div>
      <Title title={'Welcome To The Dashboard'} />
      <div className="absolute bottom-2 right-2">
        <img src={undraw} alt="" className="w-[30vw]" />
      </div>
    </div>
  )
}

export default Dashboard
