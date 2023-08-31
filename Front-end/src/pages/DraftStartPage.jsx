import DraftStart from "../components/DraftStart";
import OrangeBtn from "../components/OrangeBtn";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "../routes";

const DraftStartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state;

  return (
    <div className="flex items-center flex-col">
      <DraftStart id={type} />
      <div className="drop-shadow-2xl fixed bottom-12">
        <OrangeBtn onClick={() => navigate(routes.draftRegister)}>다음으로</OrangeBtn>
      </div>
    </div>
  );
};

export default DraftStartPage;
