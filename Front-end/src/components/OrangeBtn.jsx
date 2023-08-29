const OrangeBtn = ({ onClick, children }) => {
  return (
    <button className="text-pretendard-l w-[22rem] h-14 rounded-xl bg-orange text-white font-bold" onClick={onClick}>
      {children}
    </button>
  );
};

export default OrangeBtn;
