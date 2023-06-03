import React, { useEffect, useState } from "react";
import Icon from "../../assets/icon.svg";
import Barang from "../../assets/barang.svg";
import Notif from "../../assets/notif.svg";
import Beranda from "../../assets/beranda.svg";
import Logout from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { removeToken } from "../../api/Api";

const Sidebar = ({toggle, setToggle}) => {

  const [loc, setLoc]= useState('barang')

  const laporanHandler = () => {

    if (loc === 'laporan') {
      setLoc('barang')
    } else {
      setLoc('laporan')
    setToggle(true)
    }
  }

  return (
    <div className="w-[516px] bg-primary800 z-50 py-14 px-16 -mt-44">
      <div className="sticky top-14">
        <div className="flex gap-2 items-center">
          <img src={Icon} alt="" />
          <p className="font-bold text-[27px] text-white">SortWare</p>
        </div>

        <div className="flex flex-col mt-20 gap-5">
          <Link to="/">
            <figure className="flex items-center px-4 justify-start gap-2 h-fit py-4  rounded-xl hover:bg-primary700 duration-300">
              <img src={Beranda} alt="" />
              <figcaption className="h6 font-semibold text-white">
                Beranda
              </figcaption>
            </figure>
          </Link>

          <Link to='/barang' onClick={() => {setLoc('barang')}}>
            <figure className={`flex items-center px-4 gap-2 py-4 rounded-xl h-fit hover:bg-primary700 bg-primary700 duration-300`}>
              <img src={Barang} alt="" />
              <figcaption className="h6 font-semibold text-white">
                Barang
              </figcaption>
            </figure>
          </Link>

          <Link onClick={() => laporanHandler()} >
            <figure className={`flex items-center px-4 -ml-1 gap-2 py-4 rounded-xl h-fit hover:bg-primary700 duration-300`}>
              <img src={Notif} alt="" />
              <figcaption className="h6 font-semibold text-white">
                Pelaporan Barang  
              </figcaption>
            </figure>
          </Link>

          <Link onClick={() => {removeToken()}} >
            <figure className="flex items-center px-4 gap-2 py-4 rounded-xl h-fitd-xl hover:bg-err300 duration-300 -ml-1">
              <img src={Logout} alt="" />
              <figcaption className="h6 font-semibold text-white">
                Logout
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
