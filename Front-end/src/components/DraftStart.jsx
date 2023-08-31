import { businessUser, supportUser } from "../constants/user";

const DraftStart = ({ id }) => {
  return (
    <div className="font-pretendard-l flex flex-col justify-start items-center text-left p-6 mt-[8rem]">
      <div className="animate-fadein w-[23rem] flex justify-center">
        <img src={id === "peach" ? "/support.png" : "/export.png"} alt="export" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="font-pretendard-r text-3xl font-bold mt-[3rem] mb-8">
          {id === "peach" ? supportUser[0] : businessUser[0]}를 원해요!
        </div>
        <div>
          선택하신 상품은{" "}
          <span className="text-orange font-bold">{id === "peach" ? supportUser[1] : businessUser[1]}</span>입니다!
          <br /> 컨택 시 과정은 아래와 같습니다.
        </div>
        <div className="mt-5">{id === "peach" ? supportUser[2] : businessUser[2]}</div>
      </div>
    </div>
  );
};

export default DraftStart;
