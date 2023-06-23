import { useEffect, useState } from "react";
import { Button } from "../button/Buttons";
import { Input } from "../input/Input";
import { addData, getBarang, uploadFoto } from "../../api/Api";
import { GagalPopup, SuccessPopup } from "../popup/Popup";
import { useParams } from "react-router-dom";
import {Kategori} from "../../data/Kategori"

export const AddForm = () => {
  const [file, setFile] = useState();
  const [barang, setBarang] = useState({
    nama: "",
    kategori: "",
    tanggal_masuk: "",
  });
  const [done, setDone] = useState(false);
  const [gagal, setGagal] = useState(false);

  const handleFile = (file) => {
    setFile(file);
  };

  const popupHandler = () => {
    setDone(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      uploadFoto(barang, file);

      setTimeout(() => {
        setBarang({
          nama: "",
          kategori: "",
          tanggal_masuk: "",
        });
        popupHandler();
      }, 1500);
    } catch (error) {
      setGagal(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[1222px] shadow-xl rounded-3xl bg-white"
      >
        <p className="h3 font-bold text-white bg-primary800 py-6 text-center rounded-t-3xl">
          Tambah Barang
        </p>
        <div className="flex flex-col py-16 gap-8">
          <div className="px-32">
            <div className="flex flex-col gap-3 justify-center items-center border-primary900 rounded-xl border-2 p-4 border-dashed w-full">
              {file && (
                <img
                  className="w-1/3 object-contain"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              )}
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
            <Input
              onChange={(e) => {
                setBarang({ ...barang, nama: e.target.value });
              }}
              placeholder={`Nama barang`}
              value={barang.nama}
            />
          </div>

          <div className="flex flex-col px-32 gap-2">
            <label className="font-semibold text-[22px]">Kategori</label>
            <select
              onChange={(e) => {
                setBarang({ ...barang, kategori: e.target.value })
              }}
              value={barang.kategori}
              className="border-2 border-primary900 rounded-xl text-[18px] outline-none font-[500] text-neutral-900 px-12 py-4 w-full"
            >
              {Kategori.map((data) => {
                return (
                  <option value={data}>
                    {data}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="flex flex-col px-32 gap-2">
            <label className="font-semibold text-[22px]">Tanggal Masuk</label>
            <Input
              type="date"
              onChange={(e) => {
                setBarang({ ...barang, tanggal_masuk: e.target.value });
              }}
              placeholder={`Tanggal Masuk`}
              value={barang.tanggal_masuk}
            />
          </div>

          <div className="flex flex-col px-32 mt-20">
            <Button>
              Submit
            </Button>
          </div>
        </div>
      </form>

      <div className={`${done ? "fixed" : "hidden"} top-72 left-[700px]`}>
        <SuccessPopup />
      </div>

      <div className={`${done ? "fixed" : "hidden"} top-72 left-[700px]`}>
        <GagalPopup setGagal={setGagal} />
      </div>
    </div>
  );
};

export const EditForm = ({ title }) => {
  const param = useParams();
  const [file, setFile] = useState();
  const [barang, setBarang] = useState({
    id: param.id,
    nama: "",
    kategori: "",
    tanggal_masuk: "",
  });
  const [done, setDone] = useState(false);
  const [gagal, setGagal] = useState(false);

  const handleFile = (file) => {
    setFile(file);
  };

  const popupHandler = () => {
    setDone(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      uploadFoto(barang, file);

      setTimeout(() => {
        setBarang({
          nama: "",
          kategori: "",
          tanggal_masuk: "",
        });
        popupHandler();
      }, 1500);
    } catch (error) {
      setGagal(true);
    }
  };

  const getData = async () => {
    let mdata = [];
    try {
      mdata = await getBarang();
      mdata.map((barang) => {
        if (barang.id === param.id) {
          setBarang(barang);
        }
      });
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[1222px] shadow-xl rounded-3xl bg-white"
      >
        <p className="h3 font-bold text-white bg-primary800 py-6 text-center rounded-t-3xl">
          {title}
        </p>
        <div className="flex flex-col py-16 gap-8">
          <div className="px-32">
            <div className="flex flex-col gap-3 justify-center items-center border-primary900 rounded-xl border-2 p-4 border-dashed w-full">
              {file && (
                <img
                  className="w-1/3 object-contain"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              )}
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
            <Input
              onChange={(e) => {
                setBarang({ ...barang, nama: e.target.value });
              }}
              placeholder={`Nama barang`}
              value={barang.nama}
            />
          </div>

          <div className="flex flex-col px-32 gap-2">
            <label className="font-semibold text-[22px]">Kategori</label>
            <select
              onChange={(e) => {
                setBarang({ ...barang, kategori: e.target.value })
              }}
              value={barang.kategori}
              className="border-2 border-primary900 rounded-xl text-[18px] outline-none font-[500] text-neutral-900 px-12 py-4 w-full"
            >
              {Kategori.map((data) => {
                return (
                  <option value={data}>
                    {data}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="flex flex-col px-32 gap-2">
            <label className="font-semibold text-[22px]">Tanggal Masuk</label>
            <Input
              type="date"
              onChange={(e) => {
                setBarang({ ...barang, tanggal_masuk: e.target.value });
              }}
              placeholder={`Tanggal Masuk`}
              value={barang.tanggal_masuk}
            />
          </div>

          <div className="flex flex-col px-32 mt-20">
            <Button>
              Save
            </Button>
          </div>
        </div>
      </form>

      <div className={`${done ? "fixed" : "hidden"} top-72 left-[700px]`}>
        <SuccessPopup />
      </div>

      <div className={`${done ? "fixed" : "hidden"} top-72 left-[700px]`}>
        <GagalPopup setGagal={setGagal} />
      </div>
    </div>
  );
};
