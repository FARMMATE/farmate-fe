const DraftTab = ({ children, onClick }) => {
  return (
    <>
      <button
        type="click"
        onClick={onClick}
        className="font-pretendard-l focus:after:content-[''] focus:after:block focus:after:w-[4.3rem] focus:after:border-b-2 focus:after:border-b-black focus:font-pretendard-r text-lg focus:font-bold mr-7"
      >
        {children}
      </button>
    </>
  );
};

export default DraftTab;
