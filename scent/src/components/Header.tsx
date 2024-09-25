import Link from "next/link";
import React from "react";
import Image from "next/image";
import scentMatching from "../../public/icon/scentMatching.png";

const header = () => {
  return (
    <div>
      <div className="flex h-[100px] w-full justify-between border-b-2 border-solid border-smBorderColor bg-smColor p-5">
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center">
            <Image
              src={scentMatching}
              alt="sm로고"
              width={100}
              height={100}
            ></Image>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-6">
          <Link href="/sign-in">
            <div>로그인</div>
          </Link>
          <Link href="/sign-up">
            <div>회원가입</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default header;
