import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { DetailCard, UbahCard } from "../../components/card/Card";
import { LaporanPopup } from "../../components/popup/Popup";
import { getBarang } from "../../api/Api";
import Spinner from "../../assets/loading.svg";

const DetailBarang = () => {
  let params = useParams();
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(true);

  let menuRef = useRef();

  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  const getData = async () => {
    let mdata = [];
    try {
      mdata = await getBarang();
      mdata.map((barang) => {
        if (barang.id === params.id) {
          setData(barang);
        }
      });
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    addEventListener("mousedown", onClose);
  }, []);

  return (
    <div>
      {load ? (
        <MainLayout title="Detail Barang" toggle={toggle} setToggle={setToggle}>
          <div className="p-14 flex justify-center items-center w-full">
            <img className="animate-spin w-40" src={Spinner} alt="" />
          </div>
        </MainLayout>
      ) : (
        <MainLayout title="Detail Barang" toggle={toggle} setToggle={setToggle}>
          <div className="p-14 mt-20">
            <div key={data.id} className="flex gap-10">
              <UbahCard img={data.foto} data={data} />
              
              <DetailCard
                id={data.id}
                nama={data.nama}
                kategori={data.kategori}
                masuk={data.tanggal_masuk}
              />
            </div>
            <div
              ref={menuRef}
              className={`${toggle ? "fixed" : "hidden"} top-72 left-[700px]`}
            >
              <LaporanPopup />
            </div>
          </div>
        </MainLayout>
      )}
    </div>
  );
};

export default DetailBarang;
