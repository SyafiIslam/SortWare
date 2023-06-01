import React from "react";
import { barang } from "../../data/Barang";
import { BarangCard } from "../../components/card/Card";
import { Search } from "../../components/input/Input";
import { AddButton } from "../../components/button/Buttons";
import MainLayout from "../../components/layout/MainLayout";

const BarangPage = () => {
  return (

    <MainLayout>
      <div className="absolute left-[750px] top-36">
        <Search />
      </div>
      <div className="flex justify-start w-full flex-wrap p-14 mt-20 gap-10">
        {barang.map((data) => {
          return <BarangCard img={data.foto} name={data.nama} id={data.id} />;
        })}
      </div>


      <div className="fixed z-50 bottom-10 right-10">
        <AddButton />
      </div>
    </MainLayout>
  );
};

export default BarangPage;
