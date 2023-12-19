import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPenawaran } from '../../Redux/Penawaran/action'
import CardRumah from '../CardRumah'

function Penawaran() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPenawaran())
  }, [dispatch])

  const { allEntity } = useSelector((state) => state.penawaran)

  return (
    <div id="penawaran" className="desktop3:px-[11%] desktop:px-[7%]  desktop2:px-[7%] py-[1.5%] mt-[1.5%] mb-[4%] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
      <div className="flex items-center mb-[2rem]">
        <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh] phone:w-[1vw] tablet:w-[1vw] laptop:w-[0.4vw] desktop:w-[0.4vw] desktop2:w-[0.4vw]"></div>
        <p className="text-[38px] phone:text-[24px] tablet:text-[24px] laptop:text-[24] font-Quicksand font-bold text-[#031E33] desktop:text-[34px] desktop2:text-[34px]">Penawaran</p>
      </div>
      <div className="grid desktop3:grid-cols-3 desktop3:gap-y-6 laptop:grid-cols-2 desktop2:grid-cols-3  desktop2:gap-x-[5%] desktop:grid-cols-2 desktop:gap-y-3  desktop2:gap-y-3   desktop:gap-x-[5%] laptop:gap-x-[5%] desktop3:gap-x-[5%] phone:gap-y-3 tablet:gap-y-5 laptop:gap-y-5">
        {allEntity && allEntity.map((item, i) => <CardRumah key={i} gambar={item.gambar} nama_rumah={item.nama_rumah} harga_rumah={item.harga_rumah} lokasi_rumah={item.lokasi_rumah} />)}
      </div>
    </div>
  )
}

export default Penawaran
