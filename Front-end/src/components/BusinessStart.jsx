const BusinessStart = () => {
  return (
    <div className="font-pretendard-l flex flex-col justify-start items-center text-left p-6 mt-[8rem]">
      <div className="animate-fadein w-[70%]">
        <img src="/export.png" alt="export" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="font-pretendard-r text-3xl font-bold mt-[4rem] mb-10">전문가를 원해요!</div>
        <div>
          선택하신 상품은 <span className="text-orange font-bold">For Business</span>입니다!
          <br /> 컨택 시 과정은 아래와 같습니다.
        </div>
        <div className="mt-5">시안 등록 -&gt; 채택 확정 -&gt; 담당자와의 합의 -&gt; 계약 확정</div>
      </div>
    </div>
  );
};

export default BusinessStart;
