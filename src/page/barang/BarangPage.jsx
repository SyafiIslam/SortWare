import React, { useEffect, useRef, useState } from "react";
import { BarangCard } from "../../components/card/Card";
import { Search } from "../../components/input/Input";
import Spinner from '../../assets/loading.svg'
import { AddButton } from "../../components/button/Buttons";
import MainLayout from "../../components/layout/MainLayout";
import { LaporanPopup } from "../../components/popup/Popup";
import { addData, getBarang } from "../../api/Api";
import { Link } from "react-router-dom";

const BarangPage = () => {
  const [toggle, setToggle] = useState(false);
  let menuRef = useRef();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  const getData = async () => {
    try {
      let data = await getBarang();
      setData(data);
      setLoad(false);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    addEventListener("mousedown", onClose);
    getData();
  }, []);

  return (
    <div>
      {load ? (
        <MainLayout title="List Barang" toggle={toggle} setToggle={setToggle}>
        <div className="absolute left-[750px] top-36">
          <Search />
        </div>
        <div className="flex justify-center items-center w-full flex-wrap gap-10">
          <img className="animate-spin w-40" src={Spinner} alt="" />
        </div>

        <Link to={`/add_barang`} className="fixed z-50 bottom-10 right-10">
          <AddButton onClick={() => addData()} />
        </Link>

        <div
          ref={menuRef}
          className={`${toggle ? "fixed" : "hidden"} top-72 left-[700px]`}
        >
          <LaporanPopup />
        </div>
      </MainLayout>
      ) : (
        <MainLayout title="List Barang" toggle={toggle} setToggle={setToggle}>
          <div className="absolute left-[750px] top-36">
            <Search />
          </div>
          <div className="flex justify-start w-full flex-wrap p-14 mt-20 gap-10">
            {data.map((data) => {
              return (
                <BarangCard
                  key={data.id}
                  img={data.foto}
                  name={data.nama}
                  id={data.id}
                />
              );
            })}
          </div>

          <Link to={`/add_barang`} className="fixed z-50 bottom-10 right-10">
            <AddButton onClick={() => addData()} />
          </Link>

          <div
            ref={menuRef}
            className={`${toggle ? "fixed" : "hidden"} top-72 left-[700px]`}
          >
            <LaporanPopup />
          </div>
        </MainLayout>
      )}
    </div>
  );
};

export default BarangPage;
