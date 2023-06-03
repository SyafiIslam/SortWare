import { useRef, useState } from "react";
import { Button } from "../button/Buttons";
import { Input } from "../input/Input";

export const BarangForm = ({ title }) => {
  const [file, setFile] = useState();

  const handleFile = (file) => {
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    URL.createObjectURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[1222px] shadow-xl rounded-3xl bg-white"
    >
      <p className="h3 font-bold text-white bg-primary800 py-6 text-center rounded-t-3xl">
        {title}
      </p>
      <div className="flex flex-col py-16 gap-8">
        <div className="px-32">
          <div className="flex flex-col gap-3 justify-center items-center border-primary900 rounded-xl border-2 p-16 border-dashed w-full">
            <img
              className="w-1/3 object-contain"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <input
              className="file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-primary50 file:text-primary700
              hover:file:bg-primary100 transition-all duration-300 file:cursor-pointer ml-24"
              onChange={(e) => {
                handleFile(e.target.files[0]);
              }}
              type="file"
            />
          </div>
        </div>

        <div className="flex flex-col px-32 gap-2">
          <label className="font-semibold text-[22px]">Nama Barang</label>
          <Input placeholder={`Nama barang`} />
        </div>

        <div className="flex flex-col px-32 gap-2">
          <label className="font-semibold text-[22px]">Kategori</label>
          <Input placeholder={`Kategori`} />
        </div>

        <div className="flex flex-col px-32 gap-2">
          <label className="font-semibold text-[22px]">Tanggal Masuk</label>
          <Input placeholder={`Tanggal Masuk`} />
        </div>

        <div className="flex flex-col px-32 mt-20">
          <Button />
        </div>
      </div>
    </form>
  );
};
