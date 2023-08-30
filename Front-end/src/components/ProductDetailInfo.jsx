const ProductDetailInfo = ({ type, children, src }) => {
  return (
    <div className="mt-10 p-7 flex flex-col font-pretendard-l">
      <div className="font-pretendard-r text-xl font-bold mb-3 items-start text-left">{type}</div>
      <div className="flex justify-center items-center">
        <img className="w-[22rem]" src={src} alt="farm-info" />
      </div>
      <div className="mt-5 text-start text-sm leading-6">{children}</div>
    </div>
  );
};

export default ProductDetailInfo;
