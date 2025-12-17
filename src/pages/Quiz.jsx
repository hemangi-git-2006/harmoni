import React, { useState } from "react";
import QuizSelect from "../component/QuizSelect";
import CardFlipQuiz from "../component/CardFlipQuiz";

const QuizPage = () => {
  const [showMCQ, setShowMCQ] = useState(false);

  return (
    <>
      {!showMCQ && (
        <QuizSelect onStartMCQ={() => setShowMCQ(true)} />
      )}

      {showMCQ && (
        <CardFlipQuiz onBack={() => setShowMCQ(false)} />
      )}
    </>
  );
};

export default QuizPage;
