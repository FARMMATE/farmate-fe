import ProductTitle from "./ProductTitle";
import ProductInfo from "./ProductInfo";
import { strawberryInfo, peachInfo } from "../constants/productInfo";
import { useState, useEffect, useRef } from "react";

const ProductBasicInfo = ({ id }) => {
  const [isLnbFixed, setIsLnbFixed] = useState(false);
  const lnb = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const lnbElement = lnb.current;
      const lnbOffsetTop = lnbElement.offsetTop;

      const scrollTop = window.scrollY;

      if (lnbOffsetTop <= scrollTop + 40) {
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
          <img className="w-[26rem] h-[14rem]" src={id === "peach" ? "/peach.jpg" : "/eximg.png"} alt="product" />
        </div>
        <div id="lnb" ref={lnb} className="mt-8 pb-8">
          <ProductTitle id={id} />
          <div className="text-start mt-5 mr-14">
            <ProductInfo type="예산">{id === "peach" ? peachInfo[2] : strawberryInfo[2]}</ProductInfo>
            <ProductInfo type="모집 기간">{id === "peach" ? peachInfo[3] : strawberryInfo[3]}</ProductInfo>
            <ProductInfo type="작업 기간">{id === "peach" ? peachInfo[4] : strawberryInfo[4]}</ProductInfo>
            <ProductInfo type="브랜딩 사항">{id === "peach" ? peachInfo[5] : strawberryInfo[5]}</ProductInfo>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBasicInfo;
