import DraftTab from "../components/DraftTab";
import OrangeBtn from "../components/OrangeBtn";
import BusinessIntro from "../components/BusinessIntro";
import { BusinessTab } from "../utils/BusinessTab";
import { register } from "../utils/BusinessTab";
import { detail } from "../utils/BusinessTab";
import { useState, useRef } from "react";

const BusinessRegister = () => {
  const [clickIntro, setClickIntro] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const [clickDetail, setClickDetail] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col m-5">
        <div className="flex flex-col justify-start items-start text-left">
          <div className="flex mb-6">
            <DraftTab>{BusinessTab[0]}</DraftTab>
            <DraftTab>{BusinessTab[1]}</DraftTab>
            <DraftTab>{BusinessTab[2]}</DraftTab>
          </div>
        </div>

        <BusinessIntro />
        <div className="drop-shadow-2xl fixed bottom-12 ml-4">
          <OrangeBtn>정보 등록하기</OrangeBtn>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
