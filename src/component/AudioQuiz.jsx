import React, { useState } from "react";
import { FaPlay, FaHeadphones } from "react-icons/fa";
import "./AudioQuiz.css";

const AUDIO_QUESTIONS = [
  { audio: "C4.mp3", options: ["C4", "D4", "F4", "A4"], correct: "C4" },
  { audio: "D4.mp3", options: ["C4", "D4", "E4", "G4"], correct: "D4" },
  { audio: "E4.mp3", options: ["E4", "F4", "A4", "C4"], correct: "E4" },
  { audio: "F4.mp3", options: ["D4", "F4", "G4", "A4"], correct: "F4" },
  { audio: "G4.mp3", options: ["E4", "F4", "G4", "B4"], correct: "G4" },
  { audio: "A4.mp3", options: ["A4", "C4", "D4", "F4"], correct: "A4" },
  { audio: "B4.mp3", options: ["A4", "B4", "C4", "D4"], correct: "B4" },
  { audio: "C3.mp3", options: ["C3", "D3", "E3", "G3"], correct: "C3" },
  { audio: "D3.mp3", options: ["C3", "D3", "F3", "A3"], correct: "D3" },
  { audio: "E3.mp3", options: ["E3", "G3", "A3", "C3"], correct: "E3" },
];

export default function AudioQuiz({ onBack }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [done, setDone] = useState(false);

  const current = AUDIO_QUESTIONS[index];

  const playSound = () => {
    const audio = new Audio(`/Piano/${current.audio}`);
    audio.currentTime = 0;
    audio.play();
  };

  const choose = (opt) => {
    if (locked) return;
    setSelected(opt);
    setLocked(true);

    if (opt === current.correct) setScore(s => s + 1);

    setTimeout(() => {
      if (index + 1 < AUDIO_QUESTIONS.length) {
        setIndex(i => i + 1);
        setSelected(null);
        setLocked(false);
      } else {
        setDone(true);
      }
    }, 900);
  };

  if (done) {
    return (
      <div className="audio-page center">
        <div className="result-card">
          <h2>🎧 Audio Quiz Completed</h2>
          <p>Score: {score} / 10</p>

          {score >= 7 ? (
            <h1 className="gold-text">Great Ears! 🎶</h1>
          ) : (
            <h1 className="title-unlock">Practice More 👂</h1>
          )}

          <button className="back-btn" onClick={onBack}>
            ← Back to Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-page">
      <div className="audio-card">
        <h1><FaHeadphones /> Listen & Guess</h1>
        <p>Question {index + 1} of 10</p>

        <button className="play-btn" onClick={playSound}>
          <FaPlay /> Play Sound
        </button>

        <div className="option-grid">
          {current.options.map((opt, i) => {
            let cls = "option-btn";
            if (selected) {
              if (opt === current.correct) cls += " correct";
              else if (opt === selected) cls += " wrong";
            }

            return (
              <button key={i} className={cls} onClick={() => choose(opt)}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
