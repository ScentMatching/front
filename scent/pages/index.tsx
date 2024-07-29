import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const home = () => {
  return (
    <div>
      <Header />
      <div className="mb-32 mt-32 flex h-[360px] w-full flex-col items-center justify-center border-solid border-smBorderColor bg-smColor text-center shadow-md">
        <p className="flex flex-col text-4xl font-bold">
          당신의 향이 궁금하지 않으신가요?
        </p>
        <Button>테스트하러가기</Button>
      </div>
      <Footer />
    </div>
  );
};

export default home;
