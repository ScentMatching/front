import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <div>
      <div className="flex h-[100px] w-full justify-between border-b-2 border-solid border-smBorderColor bg-smColor p-5">
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center">
            (로고) Scent Matching
          </div>
        </Link>
        <div className="flex items-center justify-center gap-6">
          <Link href="/login">
            <div>로그인</div>
          </Link>
          <Link href="/signin">
            <div>회원가입</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default header;
