import { useRef } from "react";
import { intro } from "../utils/BusinessTab";

const Business = ({ intro, placeholder }) => {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  return (
    <div className="font-pretendard-l bg-gradient-to-b from-orange from-60% rounded-xl p-6 h-[35rem] w-[24rem] text-left">
      <div className="font-bold text-2xl mb-5">{intro}</div>
      <textarea
        type="text"
        ref={textarea}
        onChange={handleResizeHeight}
        rows={1}
        className="bg-white outline-none text-gray-900 rounded-lg block w-full p-2.5 max-h-[30rem] min-h-[6rem]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Business;
