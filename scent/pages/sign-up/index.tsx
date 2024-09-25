import { useToast } from "@chakra-ui/react";
import LoginInput from "@/components/LoginInput";
import { USER_INPUT_VALIDATION } from "@/constants/input";

const SignIn = () => {
  const toast = useToast();

  const initialValues = {
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  };

  const validate = (values: any) => {
    const errors: {
      email?: string;
      nickname?: string;
      password?: string;
      passwordConfirm?: string;
    } = {};

    // 이메일 검증
    if (!values.email) {
      errors.email = USER_INPUT_VALIDATION.email.errorMessage.empty;
    } else if (!USER_INPUT_VALIDATION.email.regex.test(values.email)) {
      errors.email = USER_INPUT_VALIDATION.email.errorMessage.invalid;
    }

    // 닉네임 검증
    if (!values.nickname) {
      errors.nickname = USER_INPUT_VALIDATION.nickname.errorMessage.empty;
    } else if (!USER_INPUT_VALIDATION.nickname.regex.test(values.nickname)) {
      errors.nickname = USER_INPUT_VALIDATION.nickname.errorMessage.invalid;
    }

    // 비밀번호 검증
    if (!values.password) {
      errors.password = USER_INPUT_VALIDATION.password.errorMessage.empty;
    } else if (!USER_INPUT_VALIDATION.password.regex.test(values.password)) {
      errors.password = USER_INPUT_VALIDATION.password.errorMessage.invalid;
    } else if (values.password.length < 8) {
      errors.password = USER_INPUT_VALIDATION.password.errorMessage.minLength;
    } else if (values.password.length > 16) {
      errors.password = USER_INPUT_VALIDATION.password.errorMessage.maxLength;
    }

    // 비밀번호 확인 검증
    if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm =
        USER_INPUT_VALIDATION.passwordConfirm.errorMessage.confirm;
    }

    return errors;
  };
  const handleSubmit = (values: any) => {
    toast({
      title: "회원가입 성공!",
      description: `${values.nickname}님 환영합니다!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit: submitForm,
  } = LoginInput({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>이메일</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>닉네임</label>
        <input
          type="text"
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
        />
        {errors.nickname && <p style={{ color: "red" }}>{errors.nickname}</p>}
      </div>

      <div>
        <label>비밀번호</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <div>
        <label>비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm && (
          <p style={{ color: "red" }}>{errors.passwordConfirm}</p>
        )}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "가입 중..." : "회원가입"}
      </button>
    </form>
  );
};

export default SignIn;
