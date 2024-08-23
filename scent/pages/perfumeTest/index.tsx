import Header from "@/components/Header";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="">
      <Header />
      <div className="mb-32 mt-32 flex h-screen w-full flex-col items-center justify-center gap-6 border-solid border-smBorderColor bg-smColor text-center shadow-md"></div>
      <Footer />
    </div>
  );
};

export default index;
