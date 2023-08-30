import OrangeBtn from "../components/OrangeBtn";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Splash = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.login);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <img className="w-[16rem] mb-24 animate-godown" src="/farmate-logo.png" alt="logo" />
      <div className="drop-shadow-2xl fixed bottom-12 animate-goup">
        <OrangeBtn onClick={handleOnClick}>시작하기</OrangeBtn>
      </div>
    </div>
  );
};

export default Splash;
