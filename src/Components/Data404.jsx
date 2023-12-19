import React from 'react'
import ImgNotFound from '../Images/undraw_No_data_re_kwbl.png'

function Data404() {
  return (
    <div className="absolute top-[30%] left-[49%]">
      <img src={ImgNotFound} alt="" className="w-[20vw] h-full" />
      <h4 className="text-center text-[32px] font-bold">Data not found</h4>
    </div>
  )
}

export default Data404
