import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AddForm } from "../../components/form/Form";
import { LaporanPopup } from "../../components/popup/Popup";

const AddBarang = () => {
  const [toggle, setToggle]= useState(false)
  let menuRef= useRef()

  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setToggle(false)
    }
  }
  useEffect(() => {
    // addEventListener("mousedown", onClose);
  });

  return (
    <MainLayout title="Tambah Barang" toggle={toggle} setToggle={setToggle}>
      <div className="flex justify-center items-center w-full py-20" toggle={toggle} setToggle={setToggle}>
        <AddForm />  
      </div>

      <div ref={menuRef} className={`${toggle ? 'fixed' : 'hidden'} top-72 left-[700px]`}>
        <LaporanPopup />
      </div>    
    </MainLayout>
  );
};

export default AddBarang;
