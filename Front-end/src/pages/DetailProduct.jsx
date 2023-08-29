import ProductBasicInfo from "../components/ProductBasicInfo";
import ProductDetailInfo from "../components/ProductDetailInfo";
import OrangeBtn from "../components/OrangeBtn";
import { farm } from "../utils/farm";
import { product } from "../utils/product";

const DetailProduct = () => {
  return (
    <>
      <ProductBasicInfo />
      <div className="absolute top-[30rem] overflow-scroll h-fit bg-gray-100">
        <ProductDetailInfo type={farm[0]} src="/strawberry.png">
          {farm[1]}
        </ProductDetailInfo>
        <ProductDetailInfo type={product[0]} src="/strawberry2.png">
          {product[1]}
        </ProductDetailInfo>
        <div className="h-20" />
      </div>
      <div className="fixed z-20 bottom-10 drop-shadow-xl">
        <OrangeBtn>컨택하기</OrangeBtn>
      </div>
    </>
  );
};

export default DetailProduct;
