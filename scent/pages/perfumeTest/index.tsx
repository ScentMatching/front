import Header from "@/components/Header";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="">
      <Header />
      <div className="mb-32 mt-32 flex h-screen w-full flex-col items-center gap-32 text-center">
        <div className="z-10 h-[320px] w-[1000px] content-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-8 text-3xl font-bold shadow-xl">
          1. 이러하고 저러하고 이러하고 저러하면 이렇게
          하실껀가요?ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </div>
        <div className="flex w-full justify-between p-20">
          <div className="z-10 h-[80px] w-[180px] content-center items-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor text-2xl font-medium shadow-xl">
            네
          </div>
          <div className="z-10 h-[80px] w-[180px] content-center items-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor text-2xl font-medium shadow-xl">
            아니요
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
