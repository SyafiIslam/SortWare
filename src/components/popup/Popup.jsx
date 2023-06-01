import Warning from "../../assets/warning.svg";
import Avatar from "../../assets/avatar.svg";
import Success from "../../assets/success.svg";
import { Button, OutlinedButton } from "../button/Buttons";

export const HapusPopup = () => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl shadow-xl max-w-[567px] py-4 px-14">
      <img className="w-1/4" src={Warning} alt="" />
      <p className="font-semibold h4 text-neutral-900 text-center max-w-xs">
        Apakah anda yakin untuk menghapus?
      </p>
      <div className="flex w-full gap-8 items-center">
        <button className="basis-1/2 bg-err500 rounded-2xl px-4 py-3 text-[18px] font-semibold text-white hover:-translate-y-[2px] hover:shadow-lg duration-300">
          Hapus
        </button>
        <div className="basis-1/2">
          <OutlinedButton>Hapus</OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export const LaporanPopup = () => {
  return (
    <div className="flex flex-col justify-center ml-10 bg-white rounded-3xl shadow-xl max-w-[541px]">
      <p className="h3 font-bold bg-primary900 text-center py-5 rounded-t-3xl text-white">
        PELAPORAN BARANG
      </p>
      <div className="flex py-4 px-14 gap-7">
        <img src={Avatar} alt="" />

        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <p className="font-bold h6">Manager</p>
            <p className="p2">24 jam lalu</p>
          </div>

          <div>Barang baru sudah datang, tolong segera disortir secepatnya</div>
        </div>
      </div>

			<div className="flex py-4 px-14 gap-7">
        <img src={Avatar} alt="" />

        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <p className="font-bold h6">Manager</p>
            <p className="p2">5 menit lalu</p>
          </div>

          <div>Tolong singkirkan barang yang sudah expired</div>
        </div>
      </div>
    </div>
  );
};

export const SuccessPopup = () => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl shadow-xl max-w-[567px] py-8 px-14">
      <img className="w-1/2" src={Success} alt="" />
      <p className="font-semibold h5 text-neutral-900 text-center">
				DATA BERHASIL DISIMPAN
      </p>
      <div className="flex w-full gap-8 items-center">
				<Button>
					Kembali
				</Button>
      </div>
    </div>
  );
};