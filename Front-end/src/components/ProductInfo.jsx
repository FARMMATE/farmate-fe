const ProductInfo = ({ type, children }) => {
  return (
    <div className="flex mb-1 text-sm font-pretendard-l">
      <span className="w-[8rem] text-start font-pretendard-r font-bold">{type}</span>
      <span>{children}</span>
    </div>
  );
};

export default ProductInfo;
