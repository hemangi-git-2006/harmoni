import { useState } from "react";
import "./LessonCards.css";
import pino from "../images/pino.jpg";

import { IoChevronBackCircle } from "react-icons/io5";
import staff from "../images/staff.jpg";
import claf from "../images/claf.jpg";
import accidental from "../images/accidental.png";
import intervals from "../images/intervals.jpg";
import chord from "../images/chord.png";
import scale from "../images/scale.png";
import key from "../images/key.jpg";

import Staff from "./Staff";
import Notes from "./Notes";
import Clefs from "./Clefs";
import Accidentals from "./Accidentals";
import Interval from "./Interval";
import Chords from "./Chords";
import Scales from "./Scales";
import Keys from "./Keys"


export default function LessonCards() {

  const [activeLesson, setActiveLesson] = useState(null);

  // Pitch cards
  const pitchCards = [
    {
      title: "Notes",
      desc: "Learn about notes and their positions on the piano.",
      img: pino,
      lesson: "notes",
    },
    {
      title: "The staff",
      desc: "Learn about the staff and note positions on the staff.",
      img: staff,
      lesson: "staff",
    },
    {
      title: "Clefs",
      desc: "Understand treble clef, bass clef, and how notes are placed.",
      img: claf,
      lesson: "clefs",
    },
    {
      title: "Accidentals",
      desc: "Learn sharps, flats and naturals.",
      img: accidental,
      lesson: "accidentals",
    },
  ];

  // Structure cards
  const structureCards = [
    {
      title: "Intervals",
      desc: "Learn how distance between two notes forms intervals.",
      img: intervals,
      lesson: "interval",
    },
    {
      title: "Chords",
      desc: "Understand triads, seventh chords, and chord structures.",
      img: chord,
      lesson: "chords",
    },
    {
      title: "Scales",
      desc: "Learn major, minor and other scale patterns.",
      img: scale,
      lesson: "scales",
    },
    {
      title: "Keys",
      desc: "Understand key signatures and how to identify them.",
      img: key,
      lesson: "keys",
    },
  ];

  // ✅ Lesson routing
  if (activeLesson === "notes") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Notes />
      </div>
    );
  }

  if (activeLesson === "staff") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Staff />
      </div>
    );
  }

  if (activeLesson === "clefs") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Clefs />
      </div>
    );
  }

  if (activeLesson === "accidentals") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Accidentals />
      </div>
    );
  }

  if (activeLesson === "interval") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Interval />
      </div>
    );
  }
if (activeLesson === "chords") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Chords />
      </div>
    );
  }
  if (activeLesson === "scales") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Scales />
      </div>
    );
  }
   if (activeLesson === "keys") {
    return (
      <div className="lesson1-wrapper">
        <button className="back-btn" onClick={() => setActiveLesson(null)}>
          <IoChevronBackCircle /> Back
        </button>
        <Keys />
      </div>
    );
  }
  // ✅ Default cards page
  return (
    <div className="lesson1-wrapper">

      {/* Pitch Section */}
      <h2 className="section-title">Pitch</h2>
      <div className="card1-grid">
        {pitchCards.map((c, i) => (
          <div
            key={i}
            className="lesson1-card"
            onClick={() => setActiveLesson(c.lesson)}
          >
            <img src={c.img} alt={c.title} className="card1-image" />
            <div className="card1-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Structure Section — FIXED */}
      <h2 className="section-title">Structure</h2>
      <div className="card1-grid">
        {structureCards.map((c, i) => (
          <div
            key={i}
            className="lesson1-card"
            onClick={() => setActiveLesson(c.lesson)} // ✅ IMPORTANT FIX
          >
            <img src={c.img} alt={c.title} className="card1-image" />
            <div className="card1-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
}
