import React from "react";
import LandingImage from "../../assets/home_image.svg";
import Create from "../../assets/create.svg";
import Update from "../../assets/update.svg";
import Delete from "../../assets/delete.svg";
import { Button } from "../../components/button/Buttons";
import { CrudCard } from "../../components/card/Card";
import Navbar from "../../components/layout/Navbar";
import { Link } from "react-router-dom";
import { HapusPopup, LaporanPopup, SuccessPopup } from "../../components/popup/Popup";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-28 px-28">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-[43px]">SortWare</p>
            <p className="text-[18px] max-w-[650px]">
              SortWave merupakan sebuah sistem yang memudahkan pegawai gudang
              dalam menyortir dan mengudentifikasi barang agar sesuai standar
              dan SOP gudang.
            </p>
            <Link to='/barang' className="w-1/3 mt-5">
              <Button>Sorting Sekarang</Button>
            </Link>
          </div>

          <div className="">
            <img
              className="drop-shadow-xl max-w-[824px]"
              src={LandingImage}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-40">
          <p className="font-bold text-[34px]">CRUD</p>
          <p className="text-[18px] max-w-xs">
            sistem SortWave terdapat CRUD dalam proses penyortiran
          </p>
        </div>

        <div className="flex justify-center gap-16 mt-20">
          <CrudCard
            img={Create}
            title="CREATE"
            text="Langkah awal dalam mengatur dan mengelompokkan barang-barang sesuai dengan kategori atau kriteria tertentu"
          />
          <CrudCard
            img={Update}
            title="UPDATE"
            text="Langkah awal dalam mengatur dan mengelompokkan barang-barang sesuai dengan kategori atau kriteria tertentu"
          />
          <CrudCard
            img={Delete}
            title="DELETE"
            text="Langkah awal dalam mengatur dan mengelompokkan barang-barang sesuai dengan kategori atau kriteria tertentu"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
