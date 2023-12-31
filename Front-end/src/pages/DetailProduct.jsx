import ProductBasicInfo from "../components/ProductBasicInfo";
import ProductDetailInfo from "../components/ProductDetailInfo";
import OrangeBtn from "../components/OrangeBtn";
import { farm } from "../constants/farm";
import { product } from "../constants/product";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DetailProduct = ({ id }) => {
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const direction = scrollY > lastScrollY ? "down" : "up";
      lastScrollY = scrollY;

      if (scrollY > 50) {
        setToast(true);
        if (direction === "down") setScroll(true);
        else if (direction === "up") {
          setScroll(false);
          setTimeout(() => {
            setToast(false);
          }, 1000);
        }
      } else {
        setToast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnClick = () => {
    Swal.fire({
      text: "컨택하시겠습니까?",
      fontSize: "2rem",
      width: 300,
      height: 200,
      showCancelButton: true,
      cancelButtonColor: "#505050",
      confirmButtonColor: "#FF9B64",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(routes.goDraft, { state: id });
      }
    });
  };

  return (
    <>
      <ProductBasicInfo id={id} />
      <div className="absolute top-[28rem] overflow-scroll h-fit bg-gray-100">
        <ProductDetailInfo type={farm[0]} src={id === "peach" ? "/peach3.png" : "/strawberry.png"}>
          {id === "peach" ? farm[2] : farm[1]}
        </ProductDetailInfo>
        <ProductDetailInfo type={product[0]} src={id === "peach" ? "/peach2.png" : "/strawberry2.png"}>
          {id === "peach" ? product[2] : product[1]}
        </ProductDetailInfo>
        {toast ? (
          scroll ? (
            <div className="flex justify-center align-center">
              <div className="font-pretendard-l fixed z-20 rounded-2xl bg-dark-black w-[15rem] h-8 p-1 text-white bottom-[7rem] animate-goup">
                현재 10명이 스크랩했어요!
              </div>
            </div>
          ) : (
            <div className="flex justify-center align-center">
              <div className="font-pretendard-l fixed z-20 rounded-2xl bg-dark-black w-[15rem] h-8 p-1 text-white bottom-[7rem] animate-fadeout">
                현재 10명이 스크랩했어요!
              </div>
            </div>
          )
        ) : null}
        <div className="h-[8rem]" />
      </div>

      <div className="fixed z-20 bottom-10 drop-shadow-xl bg-transparent" accept="pdf image/*">
        <OrangeBtn onClick={handleOnClick}>컨택하기</OrangeBtn>
      </div>
    </>
  );
};

export default DetailProduct;
