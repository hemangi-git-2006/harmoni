import React from "react";
import "./EnharmonicPiano.css";

export default function EnharmonicPiano({ playNote }) {

  const whiteKeys = [
    { note: "C3" }, { note: "D3" }, { note: "E3" },
    { note: "F3" }, { note: "G3" }, { note: "A3" }, { note: "B3" },
    { note: "C4" }, { note: "D4" }, { note: "E4" },
    { note: "F4" }, { note: "G4" }, { note: "A4" }, { note: "B4" },
  ];

  const blackKeys = [
    { left: 35, note: "Cs3", label: "C♯\nD♭" },
    { left: 88, note: "Ds3", label: "D♯\nE♭" },

    { left: 195, note: "Fs3", label: "F♯\nG♭" },
    { left: 248, note: "Gs3", label: "G♯\nA♭" },
    { left: 301, note: "As3", label: "A♯\nB♭" },

    { left: 407, note: "Cs4", label: "C♯\nD♭" },
    { left: 460, note: "Ds4", label: "D♯\nE♭" },

    { left: 566, note: "Fs4", label: "F♯\nG♭" },
    { left: 619, note: "Gs4", label: "G♯\nA♭" },
    { left: 672, note: "As4", label: "A♯\nB♭" },
  ];

  return (
    <div className="enharmonic-wrapper">
      <div className="piano-container">

        {/* WHITE KEYS */}
        <div className="white-keys">
          {whiteKeys.map((key, i) => (
            <div 
              key={i}
              className="white-key"
              onClick={() => playNote(key.note)}
            >
              <span className="white-label">{key.note.replace(/[0-9]/g, "")}</span>
            </div>
          ))}
        </div>

        {/* BLACK KEYS */}
        <div className="black-keys">
          {blackKeys.map((key, i) => (
            <div
              key={i}
              className="black-key"
              style={{ left: `${key.left}px` }}
              onClick={() => playNote(key.note)}
            >
              <span className="black-label">{key.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
