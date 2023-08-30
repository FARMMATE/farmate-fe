import { forwardRef } from "react";

const DraftTab = forwardRef(({ children, onClick, isClicked }, ref) => {
  return (
    <button
      type="click"
      onClick={onClick}
      ref={ref}
      className={
        isClicked
          ? "after:content-[''] after:block after:w-[4.3rem] after:border-b-2 after:border-b-black font-pretendard-r text-[1.1rem] font-bold mr-7"
          : "font-pretendard-l text-[1.1rem] mr-7"
      }
    >
      {children}
    </button>
  );
});

DraftTab.displayName = "DraftTab";

export default DraftTab;
