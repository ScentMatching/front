import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questions } from "@/constants/question";
import { answers } from "@/constants/Answers";

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

  return (
    <div className="">
      <Header />
      <div className="mt-32 flex w-full flex-col items-center text-center">
        {!showResults ? (
          <>
            <div className="z-10 h-[320px] w-[1000px] content-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-8 text-3xl font-bold shadow-xl">
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
          <div className="m-32 w-[700px] content-center rounded-lg border-2 border-solid border-smBorderColor bg-smColor p-8 text-2xl shadow-xl">
            <h2 className="text-3xl font-bold">답변 결과</h2>
            <div className="text-4xl">{getResult()}</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
