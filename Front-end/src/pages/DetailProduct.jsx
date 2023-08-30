import ProductBasicInfo from "../components/ProductBasicInfo";
import ProductDetailInfo from "../components/ProductDetailInfo";
import OrangeBtn from "../components/OrangeBtn";
import { farm } from "../utils/farm";
import { product } from "../utils/product";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import { useEffect, useState } from "react";

const DetailProduct = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const direction = scrollY > lastScrollY ? "down" : "up";
      lastScrollY = scrollY;

      if (scrollY > 70) {
        setToast(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {toast && (
          <div className="flex justify-center align-center">
            <div className="font-pretendard-l fixed z-20 rounded-2xl bg-dark-black w-[15rem] h-8 p-1 text-white bottom-[7rem] animate-goup">
              현재 10명이 스크랩했어요!
            </div>
          </div>
        )}
        <div className="h-[10rem]" />
      </div>

      <div className="fixed z-20 bottom-10 drop-shadow-xl bg-transparent" accept="pdf image/*">
        <OrangeBtn onClick={() => navigate(routes.business)}>컨택하기</OrangeBtn>
      </div>
    </>
  );
};

export default DetailProduct;
