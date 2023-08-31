import OrangeBtn from "../components/OrangeBtn";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import { useState } from "react";

const Splash = () => {
  const navigate = useNavigate();
  const [goLogin, setGoLogin] = useState(false);

  const handleOnClick = () => {
    setGoLogin(true);
    setTimeout(() => {
      navigate(routes.login);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <img
        className={goLogin ? "w-[16rem] mb-24 animate-logofadeout" : "w-[16rem] mb-24 animate-godown"}
        src="/farmate-logo.png"
        alt="logo"
      />
      <div
        className={
          goLogin
            ? "drop-shadow-2xl fixed bottom-12 animate-buttonfadeout"
            : "drop-shadow-2xl fixed bottom-12 animate-goup"
        }
      >
        <OrangeBtn onClick={handleOnClick}>시작하기</OrangeBtn>
      </div>
    </div>
  );
};

export default Splash;
