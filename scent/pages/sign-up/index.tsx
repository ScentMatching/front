import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { USER_INPUT_VALIDATION } from "@/constants/input";
import LoginInput from "@/components/LoginInput";
import Button from "@/components/Button";

interface FormValues {
  email: string;
  nickname?: string;
  password: string;
  passwordConfirm?: string;
}

const { email, password, nickname, passwordConfirm } = USER_INPUT_VALIDATION;

const rules = {
  emailRules: {
    required: email.errorMessage.empty,
    pattern: {
      value: email.regex,
      message: email.errorMessage.invalid,
    },
  },
  passwordRules: {
    required: password.errorMessage.empty,
    pattern: {
      value: password.regex,
      message: password.errorMessage.invalid,
    },
    minLength: {
      value: 8,
      message: password.errorMessage.minLength,
    },
    maxLength: {
      value: 16,
      message: password.errorMessage.maxLength,
    },
  },
  nicknameRules: {
    required: nickname.errorMessage.empty,
    pattern: {
      value: nickname.regex,
      message: nickname.errorMessage.invalid,
    },
  },
};

const SignUp = () => {
  const router = useRouter();
  const { formState, register, handleSubmit, getValues } = useForm<FormValues>({
    mode: "onBlur",
  });

  const { isValid, errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("회원가입 데이터:", data);
    router.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex w-[40rem] flex-col items-center pb-14 pt-14">
          <div>
            <Link href="/">
              <img
                src="/icon/scentMatching.png"
                alt="글로벌노마드 로고 이미지"
                className="h-[180px] w-[250px]"
              />
            </Link>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex w-full flex-col items-center gap-7 mobile:min-w-80 mobile:px-3"
          >
            <LoginInput
              label="이메일"
              type="email"
              placeholder="이메일을 입력해 주세요"
              isError={!!errors.email}
              errorMessage={errors.email?.message}
              {...register("email", rules.emailRules)}
            />
            <LoginInput
              label="닉네임"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              isError={!!errors.nickname}
              errorMessage={errors.nickname?.message}
              {...register("nickname", rules.nicknameRules)}
            />
            <LoginInput
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              isError={!!errors.password}
              errorMessage={errors.password?.message}
              {...register("password", rules.passwordRules)}
            />
            <LoginInput
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 한번 더 입력해 주세요"
              isError={!!errors.passwordConfirm}
              errorMessage={errors.passwordConfirm?.message}
              {...register("passwordConfirm", {
                validate: {
                  notMatch: (value: any) => {
                    const { password } = getValues();
                    return (
                      password === value ||
                      passwordConfirm?.errorMessage.confirm
                    );
                  },
                },
              })}
            />
            <Button
              type="submit"
              disabled={!isValid}
              className={`h-12 rounded-md text-base font-bold text-white ${isValid ? "bg-smButtonColor" : "bg-gray-400"}`}
            >
              회원가입 하기
            </Button>
          </form>
          <div className="text-gnGray800 mt-8 flex gap-2 text-base font-normal">
            <p>회원이신가요?</p>
            <Link
              href="/sign-in"
              className="text-gnDarkGreen text-base font-normal text-blue-600 underline"
            >
              로그인하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
