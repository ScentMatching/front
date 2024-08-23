import { useState } from "react";
import Image from "next/image";
import Heart_on from "../../public/icon/heart_on.png";
import Heart_off from "../../public/icon/heart_off.png";
import CKone from "../../public/image/CKone.jpg";

// 데이터 향수 이미지 받아오기, 평점 - 향수이름 - 향수정보 가져오기

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative flex h-[140px] min-h-[180px] w-[180px] min-w-[180px] flex-col items-center justify-center rounded-xl border-solid text-center shadow-lg">
      <div className="relative h-1/2 w-full overflow-hidden rounded-t-xl">
        <Image
          alt="perfumeImage"
          src={CKone}
          layout="fill"
          objectFit="contain"
        />
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            alt="찜하기"
            src={isLiked ? Heart_on : Heart_off}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="grid h-1/2 w-full place-items-center rounded-b-xl bg-smButtonColor"></div>
    </div>
  );
};

export default Card;
