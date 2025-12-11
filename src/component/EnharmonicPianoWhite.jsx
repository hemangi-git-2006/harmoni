import React from "react";
import "./EnharmonicPiano.css";

export default function EnharmonicPianoWhite({ playNote }) {
  const keys = [
    { name: "B♯", main: "C" },
    { name: "C♭", main: "B" },
    { name: "E♯", main: "F" },
    { name: "F♭", main: "E" }
  ];

  return (
    <div className="enharmonic-piano">
      <div className="white-keys-row">
        {keys.map((k, i) => (
          <div
            key={i}
            className="white-key"
            onClick={() => playNote(k.main)}
          >
            <div className="enh-label">{k.name}</div>
            <div className="main-note">{k.main}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
