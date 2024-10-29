import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questions } from "@/constants/question";
import { answers } from "@/constants/answers";
import { fragranceRecommendations } from "@/constants/fragrances";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    { question: string; answer: string }[]
  >([]);
  const [positiveCounts, setPositiveCounts] = useState({
    E: 0,
    S: 0,
    F: 0,
    P: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: questions[currentQuestionIndex], answer },
    ]);

    if (answer === answers[currentQuestionIndex].positive) {
      if (currentQuestionIndex < 5) {
        setPositiveCounts((prevCounts) => ({
          ...prevCounts,
          E: prevCounts.E + 1,
        }));
      } else if (currentQuestionIndex < 10) {
        setPositiveCounts((prevCounts) => ({
          ...prevCounts,
          S: prevCounts.S + 1,
        }));
      } else if (currentQuestionIndex < 15) {
        setPositiveCounts((prevCounts) => ({
          ...prevCounts,
          F: prevCounts.F + 1,
        }));
      } else if (currentQuestionIndex < 20) {
        setPositiveCounts((prevCounts) => ({
          ...prevCounts,
          P: prevCounts.P + 1,
        }));
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResult = () => {
    const result = [];
    result.push(positiveCounts.E >= 3 ? "E" : "I");
    result.push(positiveCounts.S >= 3 ? "S" : "N");
    result.push(positiveCounts.F >= 3 ? "F" : "T");
    result.push(positiveCounts.P >= 3 ? "P" : "J");
    return result.join("");
  };

  useEffect(() => {
    if (selectedAnswers.length > 0) {
      console.log(selectedAnswers);
    }
  }, [selectedAnswers]);

  // 결과가 나온 후 향수 추천 데이터 불러오기
  const mbtiResult = getResult();
  const fragrance = fragranceRecommendations[mbtiResult];

  return (
    <div className="">
      <Header />
      <div className="mt-32 flex w-full flex-col items-center text-center">
        {!showResults ? (
          <>
            <div className="z-10 mb-8 h-[320px] w-[1000px] content-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-8 text-3xl font-bold shadow-xl">
              {questions[currentQuestionIndex]}
            </div>
            <div className="flex w-full justify-between gap-28 p-20">
              <button
                className="z-10 min-h-[80px] w-full min-w-[250px] content-center items-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-2 text-xl font-medium shadow-xl"
                onClick={() =>
                  handleAnswer(answers[currentQuestionIndex].positive)
                }
              >
                {answers[currentQuestionIndex].positive}
              </button>
              <button
                className="z-10 min-h-[80px] w-full min-w-[250px] content-center items-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-2 text-xl font-medium shadow-xl"
                onClick={() =>
                  handleAnswer(answers[currentQuestionIndex].negative)
                }
              >
                {answers[currentQuestionIndex].negative}
              </button>
            </div>
          </>
        ) : (
          <div className="mb-32 w-[700px] content-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-8 text-2xl shadow-xl">
            <h2 className="text-3xl font-bold">답변 결과</h2>
            <div className="mb-6 text-4xl">{mbtiResult}</div>
            <div className="text-left">
              <h3 className="mb-4 text-2xl font-semibold">{fragrance.type}</h3>
              <p className="mb-4 text-xl font-medium">
                {fragrance.description}
              </p>

              {/* 남성용 향수 추천 */}
              <div className="mb-4 flex flex-col items-center gap-3 rounded-lg border-2 border-solid border-smResultCardBorderColor bg-smResultCardColor p-4 shadow-md">
                <h4 className="mb-2 text-xl font-semibold">남성 추천 향수</h4>
                <p className="text-center">
                  <strong>{fragrance.male.name}</strong>
                </p>
                <img
                  src={fragrance.male.image}
                  alt={fragrance.male.name}
                  className="h-[200px] w-[200px] rounded-lg border-8 border-solid border-white"
                />
                <p className="text-base">{fragrance.male.reason}</p>
                <p className="text-sm text-gray-600">
                  향 특징: {fragrance.male.notes}
                </p>
              </div>

              {/* 여성용 향수 추천 */}
              <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-solid border-smResultCardBorderColor bg-smResultCardColor p-4 shadow-md">
                <h4 className="mb-2 text-xl font-semibold">여성 추천 향수</h4>
                <p className="text-center">
                  <strong>{fragrance.female.name}</strong>
                </p>
                <img
                  src={fragrance.female.image}
                  alt={fragrance.female.name}
                  className="h-[200px] w-[200px] rounded-lg border-8 border-solid border-white"
                />
                <p className="text-base">{fragrance.female.reason}</p>
                <p className="text-sm text-gray-600">
                  향 특징: {fragrance.female.notes}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
