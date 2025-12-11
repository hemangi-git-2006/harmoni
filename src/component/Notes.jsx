import React, { useRef, useState } from "react";
import "./Notes.css";
import Piano from "../component/Piano";
import pino2 from "../images/pino2.png";
import pino3 from "../images/pino3.png";
import pinaolast from "../images/pinaolast.jpg";

export default function Notes() {
  const [playing, setPlaying] = useState(null);

  // ⭐ AUDIO FOR PIANO KEYS
  const playNote = (note) => {
    const audio = new Audio(`/Piano/${note}.mp3`);
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Audio error:", err));
  };

  // ⭐ AUDIO FOR OCTAVE TABLE
  const playAudio = (file, id) => {
    const audio = new Audio(`/octaves/${file}`);

    audio.play().then(() => setPlaying(id));
    audio.onended = () => setPlaying(null);
  };

  // ⭐ ADD REFS FOR SCROLLING
  const naturalRef = useRef(null);
  const middleRef = useRef(null);
  const octaveRef = useRef(null);
  const stepsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="notes-page">

      {/* MAIN TITLE */}
      <h1 className="notes-title">Notes</h1>

      {/* INTRODUCTION CARD */}
      <div className="notes-card">
        <h1>Introduction</h1>

        <p>
          In classical and popular music, especially from the Western world,
          there are twelve different notes. Seven of these notes are called the
          natural notes and they are represented by the white keys on the piano.
          The black keys represent the remaining five notes.
        </p>

        {/* CONTENT BOX WITH SCROLL LINKS */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(naturalRef)}>Natural notes</li>
            <li onClick={() => scrollToSection(middleRef)}>Middle C</li>
            <li onClick={() => scrollToSection(octaveRef)}>Octaves</li>
            <li onClick={() => scrollToSection(stepsRef)}>Half steps & Whole steps</li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ NATURAL NOTES */}
      <div className="notes-card" ref={naturalRef}>
        <h2>1. Natural notes</h2>

        <p>
          The natural notes are named after the first seven letters of the alphabet.
          Their names are A, B, C, D, E, F, and G.
        </p>

        <p>
          The piano gives a visual overview. Click any key to hear the sound:
        </p>

        {/* 🎹 Piano */}
        <Piano playNote={playNote} />

        <p>
          The black keys are arranged in alternating groups of two and three.
        </p>
      </div>

      {/* 2️⃣ MIDDLE C */}
      <div className="notes-card" ref={middleRef}>
        <h2>2. Middle C</h2>

        <p>
          The middlemost C on the piano is called middle C...
        </p>

        <img src={pino2} className="notes-img" alt="Middle C" />
        <p className="caption">Middle C</p>
      </div>

      {/* 3️⃣ OCTAVES */}
      <div className="notes-card" ref={octaveRef}>
        <h2>3. Octaves</h2>

        <p>
          A standard piano has multiple versions of each note...
        </p>

        <img src={pino3} className="notes-img" alt="Octaves" />

        <p>
          Notes are labeled by octave numbers. Here are common octaves:
        </p>

        {/* ⭐ OCTAVE TABLE */}
        <table className="table table-bordered text-center octave-table">
          <thead>
            <tr>
              <th>Octave</th>
              <th>Notes</th>
              <th>Pitch</th>
              <th>Audio</th>
            </tr>
          </thead>

          <tbody>
            {[7, 6, 5, 4].map((oct) => (
              <tr key={oct}>
                <td>Octave {oct}</td>
                <td>C{oct} → B{oct}</td>
                <td>{oct === 7 ? "Very high" : oct === 6 ? "High" : oct === 5 ? "Medium-high" : "Medium"}</td>
                <td>
                  <button className="play-btn" onClick={() => playAudio(`octave${oct}.mp3`, oct)}>
                    {playing === oct ? "⏸" : "▶"}
                  </button>
                  <span className="audio-length">00:0{oct === 7 ? "1" : "0"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4️⃣ HALF STEPS */}
      <div className="notes-card" ref={stepsRef}>
        <h2>4. Half steps & whole steps</h2>

        <p>
          The distance between notes is measured in half steps...
        </p>

        <img src={pinaolast} className="notes-img" alt="Half steps" />

        <p>The distance of two half steps is a whole step.</p>
      </div>
    </div>
  );
}
