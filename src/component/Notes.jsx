import React from "react";
import "./Notes.css";
import Piano from "../component/Piano";
import pino2 from "../images/pino2.png";
import pino3 from "../images/pino3.png";
import pinaolast from "../images/pinaolast.jpg";


export default function Notes() {
const [playing, setPlaying] = React.useState(null);

  // ✅ STEP 3 — Correct playNote function for Vite + public folder
  const playNote = (note) => {
    const audio = new Audio(`/Piano/${note}.mp3`);
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Audio error:", err));
  };
  // const playAudio = (file) => {
  //   const audio = new Audio(`/octaves/${file}`);
  //   audio.play().catch(err => console.log("Audio error:", err));
  // };

  const playAudio = (file, id) => {
  const audio = new Audio(`/octaves/${file}`);

  audio.play().then(() => {
    setPlaying(id); // show pause icon or animation
  });

  audio.onended = () => {
    setPlaying(null); // reset button when audio ends
  };
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

        {/* CONTENT BOX */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li>Natural notes</li>
            <li>Middle C</li>
            <li>Octaves</li>
            <li>Half steps and whole steps</li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ NATURAL NOTES */}
      <div className="notes-card">
        <h2>1. Natural notes</h2>

        <p>
          The natural notes are named after the first seven letters of the alphabet.
          Their names are A, B, C, D, E, F, and G. The names of the notes are
          always capitalized.
          <br /><br />
          The piano is a helpful aid because it provides a visual overview of the
          notes. Below is a section of piano keys labeled with their corresponding
          notes. Click any key to hear the sound:
        </p>

        {/* 🎹 PIANO COMPONENT */}
        <Piano playNote={playNote} />
        <p>The black keys are arranged in alternating groups of two and three. The note C is always on the white key to the left of the group of two black keys. Each note is in several places on the piano; the further to the right a note is located, the higher it is, and the further to the left, the lower it is.</p>

        <p className="caption">
          The black keys are arranged in alternating groups of two and three.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="notes-card">
        <h2>2. Middle C</h2>
        <p>The middlemost C on the piano is called middle C. On a standard piano with 88 keys, middle C is the fourth C from the left. Click on the piano to hear the note:</p>
        <img src={pino2} className="notes-img" alt="Middle C" />
        <p className="caption">Middle C</p>
        <p>Middle C is an essential reference point. The specific high or low version of a note you play is important, and using middle C as the reference point, makes it easier to play the right version of the note.</p>
      </div>

     {/* SECTION 3 */}
<div className="notes-card">
  <h2>3. Octaves</h2>

  <p>
    A standard piano with 88 keys has seven to eight versions of each note.
    The distance from any note to the nearest lower or higher version of the
    same note is called an octave:
  </p>

  <img src={pino3} className="notes-img" alt="Octaves" />

  <p>
    Usually, a note is referred to with the same name, regardless of whether
    it is low or high. However, there is a system for naming low and high
    notes that can be used if you need to distinguish between them. In this
    system, a number is added after the name of the note corresponding to the
    octave number in which the note falls.
    <br/><br/>
    Each octave, starting from the note C, has a number. The octave of the lowest
    C on the piano has number 1, while the octave of the highest C has number 8.
    All notes from C up to the next octave have the same number (e.g., C1, D1,
    E1, F1, G1, A1 and B1). These are the most common octaves and their numbers:
  </p>

  {/* 🔥 INSERT OCTAVE TABLE HERE */}
    <table className="table table-bordered text-center octave-table">
    <thead>
      <tr>
        <th>Octave</th>
        <th>Notes</th>
        <th>Pitch</th>
        <th>Audio sample</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Octave 7</td>
        <td>C7 → B7</td>
        <td>Very high</td>
        <td>
         <button
  className="play-btn"
  onClick={() => playAudio("octave7.mp3", 7)}
>
  {playing === 7 ? "⏸" : "▶"}
</button>

          <span className="audio-length">00:01</span>
        </td>
      </tr>

      <tr>
        <td>Octave 6</td>
        <td>C6 → B6</td>
        <td>High</td>
        <td>
         <button
  className="play-btn"
  onClick={() => playAudio("octave6.mp3", 6)}
>
  {playing === 6 ? "⏸" : "▶"}
</button>

          <span className="audio-length">00:00</span>
        </td>
      </tr>

      <tr>
        <td>Octave 5</td>
        <td>C5 → B5</td>
        <td>Moderately high</td>
        <td>
         <button
  className="play-btn"
  onClick={() => playAudio("octave5.mp3", 5)}
>
  {playing === 5 ? "⏸" : "▶"}
</button>

          <span className="audio-length">00:00</span>
        </td>
      </tr>

      <tr>
        <td>Octave 4</td>
        <td>C4 (Middle C) → B4</td>
        <td>Medium</td>
        <td>
        <button
  className="play-btn"
  onClick={() => playAudio("octave4.mp3", 4)}
>
  {playing === 4 ? "⏸" : "▶"}
</button>

          <span className="audio-length">00:00</span>
        </td>
      </tr>
    </tbody>
  </table>


</div>


      {/* SECTION 4 */}
      <div className="notes-card">
        <h2>4. Half steps and whole steps</h2>
        <p>The distance between each of the twelve different notes is called a half step, or, a semitone. That is, the distance from any white or black key on the piano to the key immediately to its right or left, is a half step.

The distance between the natural notes E and F and the natural notes B and C is a half step (1), while the distance between all other keys is two half steps (2):</p>
        <img src={pinaolast} className="notes-img" alt="Half Steps" />
        <p >The distance of two half steps is also called a whole step or a whole tone.</p>
      </div>

    </div>
  );
}
