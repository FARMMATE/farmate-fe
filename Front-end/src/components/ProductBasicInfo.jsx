import ProductTitle from "./ProductTitle";
import ProductInfo from "./ProductInfo";
import { productInfo } from "../utils/productInfo";
import { useState, useEffect, useRef } from "react";

const ProductBasicInfo = () => {
  const [isLnbFixed, setIsLnbFixed] = useState(false);
  const lnb = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const lnbElement = lnb.current;
      const lnbOffsetTop = lnbElement.offsetTop;

      const scrollTop = window.scrollY;

      if (lnbOffsetTop <= scrollTop + 60) {
        setIsLnbFixed(true);
      } else {
        setIsLnbFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          isLnbFixed
            ? "fixed flex flex-col items-center z-20 bg-white drop-shadow-xl rounded-b-xl"
            : "flex flex-col items-center z-20 bg-white drop-shadow-xl rounded-b-xl"
        }
      >
        <div>
          <img className="w-[26rem]" src="/eximg.png" alt="product" />
        </div>
        <div id="lnb" ref={lnb} className="mt-14 pb-8">
          <ProductTitle />
          <div className="text-start mt-5 mr-14">
            <ProductInfo type="예산">{productInfo[2]}</ProductInfo>
            <ProductInfo type="모집 기간">{productInfo[3]}</ProductInfo>
            <ProductInfo type="작업 기간">{productInfo[4]}</ProductInfo>
            <ProductInfo type="브랜딩 사항">{productInfo[5]}</ProductInfo>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBasicInfo;
