import React, { useEffect, useRef, useState } from "react";
import { BarangCard } from "../../components/card/Card";
import { Search } from "../../components/input/Input";
import Spinner from "../../assets/loading.svg";
import { AddButton } from "../../components/button/Buttons";
import MainLayout from "../../components/layout/MainLayout";
import { LaporanPopup, HapusPopup } from "../../components/popup/Popup";
import { addData, deleteBarang, getBarang } from "../../api/Api";
import { Link } from "react-router-dom";
// import { barang } from "../../data/Barang";

const BarangPage = () => {
  const [toggle, setToggle] = useState(false);
  let menuRef = useRef();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [del, setDel] = useState(false);
  const [id, setId] = useState();

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
    } catch (error) {
      console.log(error);
    }
  };

  const sort = (option) => {
    const sortedData = [...data];

    if (option.toLowerCase() === "kategori") {
      sortedData.sort((a, b) => {
        let fa = a.kategori.toLowerCase(),
          fb = b.kategori.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }

    else if (option.toLowerCase() === "nama") {
      sortedData.sort((a, b) => {
        let fa = a.nama.toLowerCase(),
          fb = b.nama.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }

    else if (option.toLowerCase() === "tgl") {
      sortedData.sort((a, b) => {
        let fa = a.nama.toLowerCase(),
          fb = b.nama.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }

    if (option.toLowerCase() === "id") {
      sortedData.sort((a, b) => {
        let fa = a.id.toLowerCase(),
          fb = b.id.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }

    setData(sortedData);
  };

  useEffect(() => {
    addEventListener("mousedown", onClose);
    getData();
    console.log(data);
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
        </MainLayout>
      ) : (
        <MainLayout title="List Barang" toggle={toggle} setToggle={setToggle}>
          <div className="p-6 flex flex-col gap-2">
            <p className="font-bold">Sort by:</p>
            <select
              className="bg-primary700 text-white font-semibold p-2 rounded-md hover:shadow-lg duration-300 shadow-xl outline-none"
              onChange={(e) => {
                sort(e.target.value);
              }}
            >
              <option onClick={() => {sort("nama")}} value="Nama">Nama</option>
              <option onClick={() => {sort("kategori")}} value="Kategori">Kategori</option>
              <option onClick={() => {sort("id")}} value="ID">ID</option>
              <option onClick={() => {sort("tgl")}} value="tgl">Tanggal Masuk</option>
            </select>
          </div>
          <div className="flex justify-start w-full flex-wrap p-14 mt-20 gap-10">
            {data.map((data) => {
              return (
                <BarangCard
                  key={data.id}
                  img={data.foto}
                  name={data.nama}
                  id={data.id}
                  setDel={setDel}
                  setId={setId}
                />
              );
            })}
          </div>

          <Link to={`/add_barang`} className="fixed z-50 bottom-10 right-10">
            <AddButton onClick={() => addData()} />
          </Link>

          <div className={`${del ? "fixed" : "hidden"} top-80 left-[700px]`}>
            <HapusPopup setDel={setDel} id={id} />
          </div>

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
