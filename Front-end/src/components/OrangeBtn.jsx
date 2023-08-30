const OrangeBtn = ({ onClick, children }) => {
  return (
    <button
      className="text-pretendard-l text-[1.1rem] w-[22rem] h-14 rounded-xl bg-orange text-white font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OrangeBtn;
