import React, { useState } from "react";
import { FaPlay, FaHeadphones } from "react-icons/fa";
import "./AudioQuiz.css";

const AUDIO_SET = [
  { audio: "C4.mp3", options: ["C4", "D4", "F4", "A4"], correct: "C4" },
  { audio: "D4.mp3", options: ["C4", "D4", "E4", "G4"], correct: "D4" },
  { audio: "E4.mp3", options: ["E4", "F4", "A4", "C4"], correct: "E4" },
  { audio: "F4.mp3", options: ["D4", "F4", "G4", "A4"], correct: "F4" },
 
 { audio: "G4.mp3", options: ["E4", "F4", "G4", "B4"], correct: "G4" },
];

export default function AudioFlipQuiz() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState("quiz"); // quiz | result

  const current = AUDIO_SET[index];

  const playSound = () => {
    const audio = new Audio(`/Piano/${current.audio}`);
    audio.currentTime = 0;
    audio.play();
  };

  const handleFlip = (option) => {
    if (locked) return;

    setFlipped(option);
    setLocked(true);

    if (option === current.correct) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (index + 1 < AUDIO_SET.length) {
        setIndex((i) => i + 1);
        setFlipped(null);
        setLocked(false);
      } else {
        setPhase("result");
      }
    }, 900);
  };

  /* ================= RESULT SCREEN ================= */
  if (phase === "result") {
    return (
      <div className="flip-quiz-page center">
        <div className="result-card">
          <h2>🎧 Audio Quiz Completed</h2>
          <p>Your Score</p>
          <h1 className="gold-text">
            {score} / {AUDIO_SET.length}
          </h1>

          <button
            className="start-btn"
            onClick={() => {
              setIndex(0);
              setScore(0);
              setFlipped(null);
              setLocked(false);
              setPhase("quiz");
            }}
          >
            Retry Quiz →
          </button>
        </div>
      </div>
    );
  }

  /* ================= QUIZ ================= */
  return (
    <div className="flip-quiz-page">
      <div className="quiz-wrapper">

        <div className="quiz-headline">
          <h1><FaHeadphones /> Listen & Guess</h1>
          <p>Question {index + 1} of {AUDIO_SET.length}</p>
        </div>

        <div className="quiz-box">

          <button className="play-btn" onClick={playSound}>
            <FaPlay /> Play Sound
          </button>

          <div className="card-grid">
            {current.options.map((opt, i) => {
              let cls = "flip-card";

              if (flipped) {
                if (opt === current.correct) cls += " correct";
                else if (opt === flipped) cls += " wrong";
              }

              return (
                <div
                  key={i}
                  className={cls}
                  onClick={() => handleFlip(opt)}
                >
                  <div className="card-inner">
                    <div className="card-front">{opt}</div>
                    <div className="card-back">
                      {opt === current.correct ? "✔" : "✖"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
