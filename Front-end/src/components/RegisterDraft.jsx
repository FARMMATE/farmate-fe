import { useRef, useState } from "react";

const RegisterDraft = ({ intro, placeholder }) => {
  const textarea = useRef();
  const [imgFile, setImgFile] = useState("");

  const file = useRef();
  var reader = new FileReader();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  const handleOnFile = () => {
    reader.readAsDataURL(file.current.files[0]);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div className="font-pretendard-l bg-gradient-to-b from-orange from-60% rounded-xl p-6 h-[35rem] w-[24rem] text-left">
      <div className="font-bold text-2xl mb-5">{intro}</div>
      <label
        className="block border-white border-2 text-3xl rounded-lg text-center w-[21rem] max-h-[30rem] min-h-[6rem] mb-6 text-white pt-6"
        htmlFor="input-file"
      >
        +
      </label>
      <input ref={file} onChange={handleOnFile} type="file" id="input-file" className="hidden" />
      {imgFile && (
        <div className="flex flex-col justify-center items-center">
          <img src={imgFile} className="mb-6 w-[60%] animate-entry duration-500" alt="upload" />
        </div>
      )}

      <textarea
        type="text"
        ref={textarea}
        onChange={handleResizeHeight}
        rows={1}
        className="bg-white outline-none text-[1.1rem] stext-gray-900 rounded-lg block w-full p-2.5 max-h-[30rem] min-h-[6rem]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default RegisterDraft;
