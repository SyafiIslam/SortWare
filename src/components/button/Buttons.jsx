import Trash from "../../assets/trash.svg";
import Add from "../../assets/add.svg";

export const Button = ({ 
  children = "Button",
  onClick
}) => {
  return (
    <button className="bg-primary800 rounded-3xl text-[18px] text-white px-4 py-4 font-semibold w-full hover:shadow-lg duration-300 hover:-translate-y-[2px]"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({ children = "Button" }) => {
  return (
    <button className="w-full border-2 border-primary800 rounded-xl px-4 py-2 font-semibold text-primary800 duration-300 hover:-translate-y-[2px]">
      {children}
    </button>
  );
};

export const NavButton = ({ children = "Button", onClick }) => {
  return (
    <button onClick={onClick} className="border-2 border-shade50 text-white bg-primary700 rounded-xl px-8 py-2 font-semibold hover:bg-primary800 duration-300">
      {children}
    </button>
  );
};

export const DeleteButton = () => {
  return (
    <button className="bg-err500 px-3 py-3 rounded-xl w-full h-full flex justify-center hover:shadow-lg duration-300 hover:-translate-y-[2px]">
      <img className="object-contain" src={Trash} alt="" />
    </button>
  );
};

export const AddButton = ({onClick}) => {
  return (
    <button className="bg-primary900 rounded-full p-5 shadow-lg ">
      <img src={Add} alt="" />
    </button>
  )
}