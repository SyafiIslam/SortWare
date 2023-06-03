import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { DetailCard, UbahCard } from "../../components/card/Card";
import { barang } from "../../data/Barang";
import { LaporanPopup } from "../../components/popup/Popup";

const DetailBarang = () => {
  let params = useParams();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  let menuRef = useRef();

  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  const getBarang = () => {
    barang.map((barang) => {
      if (barang.id == params.id) {
        return setData([barang]);
      }
    });
  };

  useEffect(() => {
    getBarang();
    addEventListener("mousedown", onClose);
  }, []);
  return (
    <MainLayout title="Detail Barang" toggle={toggle} setToggle={setToggle}>
      <div className="p-14 mt-20">
        {data.map((barang) => {
          return (
            <div key={barang.id} className="flex gap-10">
              <UbahCard img={`../${barang.foto}`} />
              <DetailCard
                id={barang.id}
                nama={barang.nama}
                kategori={barang.kategori}
                masuk={barang.masuk}
              />
            </div>
          );
        })}
        <div
          ref={menuRef}
          className={`${toggle ? "fixed" : "hidden"} top-72 left-[700px]`}
        >
          <LaporanPopup />
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailBarang;
