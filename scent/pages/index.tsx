import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";
import Card from "@/components/Card";

const home = () => {
  return (
    <div>
      <Header />
      <div className="mb-32 mt-32 flex h-[360px] w-full flex-col items-center justify-center gap-6 border-solid border-smBorderColor bg-smColor text-center shadow-md">
        <p className="flex flex-col text-4xl font-bold">
          당신의 향이 궁금하지 않으신가요?
        </p>
        <Link href="perfumeTest">
          <Button>테스트하러가기</Button>
        </Link>
      </div>
      <div className="mb-32 mt-32 grid h-[360px] w-full grid-cols-4 items-center justify-center justify-items-center gap-2 border-2 border-solid border-smBorderColor p-4 shadow-md">
        <Card />
        <p>
          흰색에 향수 이미지, 주황색에 글씨가 들어갈 예정 <br />
          카드에 들어갈 향수 데이터 추가하면, 카드 추가 예정
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default home;
