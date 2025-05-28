import PropTypes from 'prop-types';

interface PrimaryButtonProps {
  onClick: any;
  addClassName: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  name: string | React.JSX.Element;
}

export default function PrimaryButton({ onClick, name, addClassName, type }: PrimaryButtonProps) {
  
  return (
    <div>
      <button type={type} className={`w-full p-2 text-[14px] border-none text-white cursor-pointer font-medium rounded-[4px] active:scale-95 bg-blue-600 hover:bg-blue-500 opacity-60 transition duration-300 ease-out ${addClassName} `} onClick={onClick} >
        {name}
      </button>
    </div>
  );
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  addClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
}