export const Input = ({
  type= 'text',
  placeholder,
}) => {
  return (
    <input
    className="border-2 border-primary900 rounded-xl text-[18px] font-[500] text-neutral-900 px-4 py-4 w-full" 
    type={type}
    onChange={(e) => {}}
    placeholder={placeholder}
    />
  )
};
