import React from "react";
import Box2 from "../../assets/box2.svg";
import Box from "../../assets/box.svg";
import Pegawai from "../../assets/pegawai.svg";

const Jumbotron = ({ title }) => {
  return (
    <div className="bg-primary700 flex justify-center items-center gap-20">
      <div className="flex items-end ml-72">
        <img src={Pegawai} alt="" />
        <img src={Box2} alt="" />
      </div>
      <p className="h2 font-bold text-white">{title}</p>
      <img className="self-end" src={Box} alt="" />
    </div>
  );
};

export default Jumbotron;
