import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage'
import Rumah from '.././Images/IMG-8172.JPG'
import CardPengalaman from '../Components/CardPengalaman'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPengalaman } from '../Redux/Pengalaman/action'

function Pengalaman() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPengalaman())
  }, [])

  const { allEntity } = useSelector((state) => state.pengalaman)

  return (
    <div class="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] py-[2rem] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
      <TitlePage judul={'Pengalaman'} />
      <div class="grid desktop3:grid-cols-3 desktop:grid-cols-2 desktop2:grid-cols-3 laptop:grid-cols-2  gap-5">
        {allEntity.map((item, i) => (
          <CardPengalaman key={i} gambar={item.gambar} judul={item.nama_rumah} value={item.project_value} />
        ))}
      </div>
    </div>
  )
}

export default Pengalaman
