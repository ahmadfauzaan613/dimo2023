import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPortofolio } from '../Redux/Portofolio/action'

function Portofolio() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPortofolio())
  }, [dispatch])

  const { allEntity } = useSelector((state) => state.portofolio)
  return (
    <div class="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] py-[2rem] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
      <TitlePage judul={'Portofolio'} />
      <div className="grid desktop3:grid-cols-4 laptop:grid-cols-2 desktop:grid-cols-2 desktop2:grid-cols-3 gap-5">
        {allEntity.map((item, i) => (
          <img key={i} src={item.gambar} class="h-full rounded cursor-pointer" alt="" />
        ))}
      </div>
    </div>
  )
}

export default Portofolio
