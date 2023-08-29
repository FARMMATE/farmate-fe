const GrayBtn = ({ onClick, children }) => {
  return (
    <button
      className="w-[22rem] h-[3rem] rounded-xl bg-my-color text-white mt-2 text-pretendard-l text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GrayBtn;
