import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Jumbotron from "../../components/layout/Jumbotron";
import { barang } from "../../data/Barang";
import {BarangCard} from "../../components/card/Card"
import { Search } from "../../components/input/Input";

const BarangPage = () => {
  return (
    <div className="relative">
      <Jumbotron title="List Barang" />
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="absolute left-[750px] top-36">
          <Search />
        </div>
        <div className="flex justify-evenly w-full flex-wrap p-14 mt-20">
          {barang.map((data) => {
            return (
              <BarangCard img={data.foto} name={data.nama} id={data.id} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default BarangPage;
