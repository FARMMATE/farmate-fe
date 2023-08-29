import { productInfo } from "../utils/productInfo";
import { user } from "../utils/user";

const ProductTitle = () => {
  return (
    <div className="flex items-center">
      <img className="w-[40px] h-[40px] mr-5" src="/local-logo.png" alt="local" />
      <div>
        <p className="text-lg font-pretendard-l text-left">{productInfo[0]}</p>
        <div className=" font-pretendard-r flex justify-between items-center">
          <p className="font-bold text-xl mr-[7rem]">{productInfo[1]}</p>
          <span className="text-orange text-sm">{user[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
