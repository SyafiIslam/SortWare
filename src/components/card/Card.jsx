import { Link } from "react-router-dom";
import { Button, DeleteButton } from "../button/Buttons";
import { updateData } from "../../api/Api";

export const CrudCard = ({ img, title, text }) => {
  return (
    <div className="max-w-[400px] flex flex-col rounded-2xl shadow-xl p-8 items-center text-center gap-3 bg-white">
      <img className="max-w-52 max-h-52" src={img} alt="" />
      <p className="h4 font-semibold">{title}</p>
      <p className="text-[18px]">{text}</p>
    </div>
  );
};

export const BarangCard = ({ img, id, name, setDel, setId }) => {
  return (
    <div key={id}>
      <img className="w-[300px] aspect-video object-contain" src={img} alt="" />
      <div className="max-w-[300px] flex flex-col rounded-2xl shadow-xl p-4">
        <p className="text-[14px] font-semibold text-neutral-500">{id}</p>
        <p className="font-bold text-[22px]">{name}</p>
        <div className="flex items-center justify-center w-full gap-2 mt-7">
          <Link
            to={`/barang/${id}`}
            className="bg-primary800 rounded-xl text-[18px] text-white px-4 py-2 font-semibold basis-5/6 hover:shadow-lg duration-300 hover:-translate-y-[2px] text-center"
          >
            Detail
          </Link>
          <div className="basis-1/6 h-full">
            <DeleteButton
              onClick={() => {
                setId(id);
                setDel(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const UbahCard = ({ img, data }) => {
  return (
    <div className="w-[480px]">
      <img className="rounded-t-3xl object-fill w-full" src={img} alt="" />
      <div className="rounded-3xl shadow-xl w-full] px-8 py-10">
        <Link to={`/update_barang/${data.id}`}>
          <Button>
            Ubah data
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const DetailCard = ({ id, nama, kategori, masuk }) => {
  return (
    <div className="w-[752px] shadow-xl rounded-3xl">
      <p className="h3 font-bold bg-primary800 rounded-t-3xl text-white p-4 text-center">
        Detail Barang
      </p>

      <div className="px-12 py-10 flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="text-[27px] font-semibold">ID Barang</p>
          <p className="text-[18px]">{id}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[27px] font-semibold">Nama Barang</p>
          <p className="text-[18px]">{nama}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[27px] font-semibold">Kategori</p>
          <p className="text-[18px]">{kategori}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[27px] font-semibold">Tanggal Masuk</p>
          <p className="text-[18px]">{masuk}</p>
        </div>
      </div>
    </div>
  );
};
