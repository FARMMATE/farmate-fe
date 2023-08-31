const SocialBtn = ({ onClick, children, src }) => {
  return (
    <button className="w-[22rem] rounded-xl text-black" onClick={onClick}>
      <div className="flex items-center justify-center mr-4">
        <img src={src} className="w-[3rem]" />
        <span className="font-pretendard-r">{children}</span>
      </div>
    </button>
  );
};

export default SocialBtn;
