const SocialBtn = ({ onClick, children }) => {
  return (
    <button className="w-[22rem] h-[3rem] rounded-xl text-black text-pretendard-l text-sm" onClick={onClick}>
      {children}
    </button>
  );
};

export default SocialBtn;
