const Input = ({ htmlFor, children, ...inputProps }) => {
  return (
    <>
      <label className="font-medium mb-6 text-lg font-pretendard-l" htmlFor={htmlFor}>
        {children}
      </label>
      <input
        className="block w-[22rem] outline-none border-b-2 focus:border-orange font-pretendard-l mb-10"
        {...inputProps}
      />
    </>
  );
};

export default Input;
