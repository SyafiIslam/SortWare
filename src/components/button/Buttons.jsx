import Trash from "../../assets/trash.svg";

export const Button = ({ children = "Button" }) => {
  return (
    <button className="bg-primary800 rounded-3xl text-white px-4 py-6 font-semibold w-full hover:shadow-lg duration-300 hover:-translate-y-[2px]">
      {children}
    </button>
  );
};

export const OutlinedButton = ({ children = "Button" }) => {
  return (
    <button className="border-2 border-primary800 rounded-xl px-4 py-2 font-semibold hover:shadow-lg duration-300 hover:-translate-y-[2px]">
      {children}
    </button>
  );
};

export const NavButton = ({ children = "Button" }) => {
  return (
    <button className="border-2 border-shade50 text-white bg-primary700 rounded-xl px-8 py-2 font-semibold hover:shadow-lg duration-300 hover:-translate-y-[2px]">
      {children}
    </button>
  );
};

export const DeleteButton = () => {
  return (
    <button className="bg-err500 px-2 py-2 rounded-xl w-full flex justify-center hover:shadow-lg duration-300 hover:-translate-y-[2px]">
      <img className="object-contain" src={Trash} alt="" />
    </button>
  );
};
