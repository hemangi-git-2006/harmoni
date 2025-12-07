// import React, { useState, useEffect, useRef } from "react";
// import "./VirtualPiano.css"; // you will create this file

// // White + black key layout
// const WHITE_NOTES = ["C", "D", "E", "F", "G", "A", "B"];
// const BLACK_NOTES = ["C#", "D#", null, "F#", "G#", "A#", null];

// // Convert note → frequency
// const getFrequency = (noteName, octave) => {
//   const noteIndex = {
//     "C": 0, "C#": 1, "D": 2, "D#": 3,
//     "E": 4, "F": 5, "F#": 6, "G": 7,
//     "G#": 8, "A": 9, "A#": 10, "B": 11
//   };

//   const n = (octave - 4) * 12 + (noteIndex[noteName] - 9);
//   return 440 * Math.pow(2, n / 12);
// };

// export default function VirtualPiano({ onClose }) {
//   const [showNotes, setShowNotes] = useState(true);
//   const audioContext = useRef(null);

//   useEffect(() => {
//     audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
//   }, []);

//   const playSound = (note, octave) => {
//     const ctx = audioContext.current;
//     if (!ctx) return;

//     const osc = ctx.createOscillator();
//     const gain = ctx.createGain();

//     const freq = getFrequency(note, octave);
//     osc.frequency.value = freq;
//     osc.type = "sine";

//     osc.connect(gain);
//     gain.connect(ctx.destination);

//     gain.gain.setValueAtTime(0.3, ctx.currentTime);
//     gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);

//     osc.start();
//     osc.stop(ctx.currentTime + 1);
//   };

//   return (
//     <div className="vp-page">
//       <h1 className="vp-title">Virtual Piano</h1>

//       <div className="vp-buttons">
//         <button className="vp-btn" onClick={onClose}>Close Piano</button>
//         <button className="vp-btn" onClick={() => setShowNotes(!showNotes)}>
//           {showNotes ? "Hide note names" : "Show note names"}
//         </button>
//       </div>

//       {/* Piano Wrapper */}
//       <div className="vp-piano-wrapper">

//         {/* White Keys */}
//         <div className="vp-white-keys">
//           {WHITE_NOTES.map((note, i) => (
//             <button
//               key={i}
//               className="vp-white-key"
//               onMouseDown={() => playSound(note, 4)}
//             >
//               {showNotes && <span className="vp-white-label">{note}</span>}
//             </button>
//           ))}
//         </div>

//         {/* Black Keys */}
//         <div className="vp-black-keys">
//           {BLACK_NOTES.map((note, i) =>
//             note ? (
//               <button
//                 key={i}
//                 className="vp-black-key"
//                 onMouseDown={() => playSound(note, 4)}
//               >
//                 {showNotes && <span className="vp-black-label">{note}</span>}
//               </button>
//             ) : (
//               <div key={i} className="vp-black-space"></div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useCallback, useRef } from "react";
import "./VirtualPiano.css"; // <-- external CSS

const NOTES = ["C", "D", "E", "F", "G", "A", "B"];
const BLACK_KEYS = ["C#", "D#", null, "F#", "G#", "A#", null];

const generateKeys = (octaves, startOctave = 3) => {
  const keys = [];
  for (let oct = startOctave; oct < startOctave + octaves; oct++) {
    NOTES.forEach((note, index) => {
      keys.push({ note, isBlack: false, octave: oct });
      if (BLACK_KEYS[index]) {
        keys.push({ note: BLACK_KEYS[index], isBlack: true, octave: oct });
      }
    });
  }
  return keys;
};

const getFrequency = (note, octave) => {
  const noteMap = {
    C: 0, "C#": 1, D: 2, "D#": 3, E: 4,
    F: 5, "F#": 6, G: 7, "G#": 8,
    A: 9, "A#": 10, B: 11
  };

  const semitone = noteMap[note];
  const n = (octave - 4) * 12 + (semitone - 9);

  return 440 * Math.pow(2, n / 12);
};

const blackKeyLabels = {
  "C#": "C#\nDb",
  "D#": "D#\nEb",
  "F#": "F#\nGb",
  "G#": "G#\nAb",
  "A#": "A#\nBb"
};

export default function Piano() {
  const [showNotes, setShowNotes] = useState(true);
  const [activeKeys, setActiveKeys] = useState(new Set());
  const [markedKeys, setMarkedKeys] = useState(new Set());
  const [isMarking, setIsMarking] = useState(false);
  const audioContextRef = useRef(null);

  const keys = generateKeys(3, 3);
  const whiteKeys = keys.filter(k => !k.isBlack);

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    return () => audioContextRef.current?.close();
  }, []);

  const playNote = useCallback((note, octave) => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = getFrequency(note, octave);
    osc.type = "triangle";

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1);
  }, []);

  const handleKeyPress = (note, octave) => {
    const keyId = `${note}${octave}`;

    if (isMarking) {
      setMarkedKeys(prev => {
        const s = new Set(prev);
        s.has(keyId) ? s.delete(keyId) : s.add(keyId);
        return s;
      });
    } else {
      setActiveKeys(prev => new Set(prev).add(keyId));
      playNote(note, octave);

      setTimeout(() => {
        setActiveKeys(prev => {
          const s = new Set(prev);
          s.delete(keyId);
          return s;
        });
      }, 150);
    }
  };

  const getBlackKeyPosition = (whiteIndex, note, octave) => {
    const valid = ["C", "D", "F", "G", "A"];
    if (!valid.includes(note)) return null;

    return {
      note: note + "#",
      octave,
      left: (whiteIndex + 1) * 56 - 20
    };
  };

  return (
    <div className="piano1-wrapper">
      <h1 className="title">Virtual Piano</h1>

      <div className="button-row">
        <button
          className={`btn-pink ${isMarking ? "active" : ""}`}
          onClick={() => setIsMarking(!isMarking)}
        >
          Mark
        </button>

        <button
          className="btn-pink"
          onClick={() => setShowNotes(!showNotes)}
        >
          {showNotes ? "Hide notes" : "Show notes"}
        </button>
      </div>

      <div className="piano-container">
        <div className="white-keys">
          {whiteKeys.map((key, index) => {
            const keyId = `${key.note}${key.octave}`;
            return (
              <div
                key={keyId}
                className={`white-key 
                  ${activeKeys.has(keyId) ? "active" : ""} 
                  ${markedKeys.has(keyId) ? "marked" : ""}`}
                onMouseDown={() => handleKeyPress(key.note, key.octave)}
              >
                {showNotes && <span className="note-label">{key.note}</span>}
              </div>
            );
          })}
        </div>

        <div className="black-keys-container">
          {whiteKeys.map((key, i) => {
            const blk = getBlackKeyPosition(i, key.note, key.octave);
            if (!blk) return null;

            const keyId = `${blk.note}${blk.octave}`;

            return (
              <div
                key={keyId}
                className={`black-key 
                  ${activeKeys.has(keyId) ? "active" : ""} 
                  ${markedKeys.has(keyId) ? "marked" : ""}`}
                style={{ left: blk.left }}
                onMouseDown={() => handleKeyPress(blk.note, blk.octave)}
              >
                {showNotes && (
                  <span className="note-label">
                    {blackKeyLabels[blk.note]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

