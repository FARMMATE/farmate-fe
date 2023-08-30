import BusinessStart from "../components/BusinessStart";
import OrangeBtn from "../components/OrangeBtn";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Business = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col w-[100vw] h-[100vh]">
      <BusinessStart />
      <div className="drop-shadow-2xl fixed bottom-12">
        <OrangeBtn onClick={() => navigate(routes.businessRegister)}>다음으로</OrangeBtn>
      </div>
    </div>
  );
};

export default Business;
