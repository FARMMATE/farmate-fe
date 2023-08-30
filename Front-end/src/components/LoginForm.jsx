import Input from "./Input";
import OrangeBtn from "./OrangeBtn";
import SocialBtn from "./SocialBtn";
import SubLabel from "./SubLabel";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import useInput from "../hooks/useInput";
import useValidation from "../hooks/useValidation";

const LoginForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const { msg: emailMsg, handleSetMsg: handleSetEmailMsg } = useValidation("");
  const { msg: pwMsg, handleSetMsg: handleSetPwMsg } = useValidation("");

  const handleOnClick = () => {
    if (window.Android) {
      window.Android.checkLogin("1", "1");
    } else {
      navigate(routes.detailProduct + "/peach");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-start text-left">
        <div className="text-xl font-semibold text-left mt-16 mb-20 font-pretendard-r">로그인</div>
        <Input
          id="email"
          name="email"
          type="email"
          value={value.email}
          placeholder="예)farmate@farmate.co.kr"
          onChange={(e) => {
            handleOnChange(e);
            handleSetEmailMsg(e);
          }}
          errorMsg={emailMsg}
        >
          이메일
        </Input>
        <Input
          id="password"
          name="password"
          type="password"
          value={value.password}
          placeholder="******"
          onChange={(e) => {
            handleOnChange(e);
            handleSetPwMsg(e);
          }}
          errorMsg={pwMsg}
        >
          비밀번호
        </Input>
      </div>

      <OrangeBtn onClick={handleOnClick}>로그인</OrangeBtn>

      <div className="mt-8 flex flex-row justify-center mb-10">
        <SubLabel>회원 가입</SubLabel>
        <div className="border-l-2 mr-5" />
        <SubLabel>아이디 찾기</SubLabel>
        <div className="border-l-2 mr-5" />
        <SubLabel>비밀번호 찾기</SubLabel>
      </div>

      <span className="bg-[#FEE500] rounded-xl mb-2 shadow-lg h-12">
        <SocialBtn src="/public/kakao.png">카카오로 간편 로그인</SocialBtn>
      </span>
      <span className="bg-[#3BC350] rounded-xl mb-2 shadow-lg h-12">
        <SocialBtn src="/public/naver.png">네이버로 간편 로그인</SocialBtn>
      </span>
      <span
        className="bg-white rounded-xl mb-2 shadow-lg h-12
"
      >
        <SocialBtn src="/public/google.png">google로 간편 로그인</SocialBtn>
      </span>
    </>
  );
};

export default LoginForm;
