interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  addClassName: string;
  //value?: string;
}

export default function Input({
  id,
  type,
  placeholder,
  addClassName,
}: InputProps) {
  return (
    <div>
      <input
        id={id}
        className={`w-full p-2 text-white bg-transparent text-xs outline-none border-[1px] border-gray-600 rounded-[3px] 
          focus:border-gray-500 
          ${addClassName}`}
        type={type}
        autoComplete="off" 
        autoCapitalize="off"
        //value=""
        placeholder={placeholder}
      />
    </div>
  );
}


// bg-black/75
// bg-gray-800 