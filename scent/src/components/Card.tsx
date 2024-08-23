import React from "react";

// 데이터 향수 이미지 받아오기, 평점 - 향수이름 - 향수정보 가져오기

const Card = () => {
  return (
    <div className="flex h-[140px] min-h-[180px] w-[180px] min-w-[180px] flex-col items-center justify-center rounded-xl text-center shadow">
      <div className="h-1/2 w-full rounded-t-xl bg-amber-200"></div>
      <div className="grid h-1/2 w-full place-items-center rounded-b-xl bg-white"></div>
    </div>
  );
};

export default Card;
