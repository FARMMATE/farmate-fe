const ProductDetailInfo = ({ type, children, src }) => {
  return (
    <div className="mt-10 p-7 flex flex-col items-start font-pretendard-l">
      <div className="font-pretendard-r text-xl font-bold mb-3">{type}</div>
      <img src={src} alt="farm-info" />
      <div className="mt-5 text-start text-sm leading-6">{children}</div>
    </div>
  );
};

export default ProductDetailInfo;
