import React, { useEffect, useRef, useState } from "react";
import { barang } from "../../data/Barang";
import { BarangCard } from "../../components/card/Card";
import { Search } from "../../components/input/Input";
import { AddButton } from "../../components/button/Buttons";
import MainLayout from "../../components/layout/MainLayout";
import { LaporanPopup } from "../../components/popup/Popup";
import { addData } from "../../api/Api";

const BarangPage = () => {

  const [toggle, setToggle]= useState(false)
  let menuRef= useRef()

  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    
    addEventListener('mousedown', onClose)

  })
  return (

    <MainLayout title="List Barang" toggle={toggle} setToggle={setToggle} >
      <div className="absolute left-[750px] top-36">
        <Search />
      </div>
      <div className="flex justify-start w-full flex-wrap p-14 mt-20 gap-10">
        {barang.map((data) => {
          return <BarangCard key={data.id} img={data.foto} name={data.nama} id={data.id} />;
        })}
      </div>

      <div className="fixed z-50 bottom-10 right-10">
        <AddButton onClick={() => addData() } />
      </div>

      <div ref={menuRef} className={`${toggle ? 'fixed' : 'hidden'} top-72 left-[700px]`}>
        <LaporanPopup />
      </div>

    </MainLayout>
  );
};

export default BarangPage;
