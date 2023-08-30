import DraftTab from "../components/DraftTab";
import OrangeBtn from "../components/OrangeBtn";
import Business from "../components/Business";
import RegisterDraft from "../components/RegisterDraft";
import { BusinessTab } from "../utils/BusinessTab";
import { register } from "../utils/BusinessTab";
import { detail } from "../utils/BusinessTab";
import { useState, useRef, useEffect } from "react";
import { intro } from "../utils/BusinessTab";

const BusinessRegister = () => {
  const [clickTab, setClickTab] = useState([true, false, false]);

  const handleOnClick = (id) => {
    if (id === "intro") {
      setClickTab([true, false, false]);
    } else if (id === "register") {
      setClickTab([false, true, false]);
    } else if (id === "detail") {
      setClickTab([false, false, true]);
    }
  };

  const introFocus = useRef();
  useEffect(() => {
    if (introFocus.current) {
      introFocus.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col m-5">
        <div className="flex flex-col justify-start items-start text-left">
          <div className="flex mb-6">
            <DraftTab ref={introFocus} onClick={() => handleOnClick("intro")}>
              {BusinessTab[0]}
            </DraftTab>
            <DraftTab onClick={() => handleOnClick("register")}>{BusinessTab[1]}</DraftTab>
            <DraftTab onClick={() => handleOnClick("detail")}>{BusinessTab[2]}</DraftTab>
          </div>
        </div>
        {clickTab[0] ? <Business intro={intro[0]} placeholder={intro[1]} /> : null}
        {clickTab[1] ? (
          <>
            <RegisterDraft intro={register[0]} placeholder={register[1]} />{" "}
          </>
        ) : null}
        {clickTab[2] ? <Business intro={detail[0]} placeholder={detail[1]} /> : null}
        <div className="drop-shadow-2xl fixed bottom-12 ml-4">
          <OrangeBtn>정보 등록하기</OrangeBtn>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
