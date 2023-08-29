const OrangeBtn = ({ onClick, children }) => {
  return (
    <button className="text-pretendard-l w-[22rem] h-[3rem] rounded-xl bg-orange text-white" onClick={onClick}>
      {children}
    </button>
  );
};

export default OrangeBtn;
