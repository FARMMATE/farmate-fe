import { strawberryInfo, peachInfo } from "../constants/productInfo";
import { businessUser, supportUser } from "../constants/user";

const ProductTitle = ({ id }) => {
  return (
    <div className="flex items-center">
      <img className="w-[40px] h-[40px] mr-5" src={"/local-logo.png"} alt="local" />
      <div>
        <p className="text-lg font-pretendard-l text-left">{id === "peach" ? peachInfo[0] : strawberryInfo[0]}</p>
        <div className=" font-pretendard-r flex justify-between items-center">
          <p className="font-bold text-xl mr-[7rem]">{id === "peach" ? peachInfo[1] : strawberryInfo[1]}</p>
          <span className="text-orange text-sm">{id === "peach" ? supportUser[1] : businessUser[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
