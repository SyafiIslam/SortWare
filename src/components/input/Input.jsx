import SearchIcon from "../../assets/search.svg";

export const Input = ({
  type = "text",
  placeholder,
  onChange,
  img,
  img2,
  onClick,
}) => {
  return (
    <div className="relative">
      <input
        required
        className="border-2 border-primary900 rounded-xl text-[18px] outline-none font-[500] text-neutral-900 px-12 py-4 w-full"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      <img
        className={`${
          img ? "absolute top-4 left-3" : "hidden"
        } max-h-[30px] max-w-[30px] object-contain`}
        src={img}
        alt=""
      />

      <img
        onClick={onClick}
        className={`${
          img2 ? "absolute top-4 right-3" : "hidden"
        } max-h-[30px] max-w-[30px] object-contain hover:cursor-pointer`}
        src={img2}
        alt=""
      />
    </div>
  );
};

export const Search = ({ onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        onChange={onChange}
        className="w-[757px] rounded-full shadow-md bg-white px-8 py-4 outline-none"
        placeholder="Masukkan kata kunci"
      />
      <div className="bg-primary900 absolute top-0 right-0 h-[56px] w-20 rounded-r-full">
        <img
          className="max-h-[30px] max-w-[30px] absolute top-5 left-7"
          src={SearchIcon}
          alt=""
        />
      </div>
    </div>
  );
};
