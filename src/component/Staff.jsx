import React, { useRef } from "react";
import "./Staff.css";

import staf from "../images/stf1.png";
import staf2 from "../images/stf2.jpg";
import staf3 from "../images/stf3.png";
import staf4 from "../images/stf4.png";
import staf5 from "../images/stf5.png";

export default function Staff() {
  // ⭐ Refs for each section
  const posRef = useRef(null);
  const ledgerRef = useRef(null);
  const linesRef = useRef(null);

  // ⭐ Smooth scrolling function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="staff-page">

      {/* MAIN TITLE */}
      <h1 className="staff-title">The staff</h1>

      {/* INTRO CARD */}
      <div className="staff-card">
        <h1>Introduction</h1>
        
        <p>
          The staff (also called the stave) is a collection of five horizontal
          lines used for music notation. Notes can be written on the lines and
          in between the spaces. The plural form of both staff and stave is
          staves.
        </p>

        {/* CONTENTS LIST */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(posRef)}>Staff positions</li>
            <li onClick={() => scrollToSection(ledgerRef)}>Ledger lines</li>
            <li onClick={() => scrollToSection(linesRef)}>Lines and spaces</li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ STAFF POSITIONS */}
      <div className="staff-card" ref={posRef}>
        <h2>1. Staff positions</h2>

        <p>The staff consists of five horizontal lines and four spaces:</p>

        <img src={staf} className="staff-img" alt="Staff" />

        <p>
          Notes can be written on the lines and in between the spaces. When a
          note is written on a line, the line passes through the center of the
          note, and when a note is written in a space, the note fills the entire
          space:
        </p>

        <img src={staf2} className="staff-img" alt="Notes in spaces/lines" />

        <p>
          Each note on the staff represents a natural note. The higher a note is
          located, the higher the pitch. Notes are read from left to right.
          Notes written above each other are played at the same time:
        </p>

        <img src={staf3} className="staff-img" alt="Chord notes" />
      </div>

      {/* 2️⃣ LEDGER LINES */}
      <div className="staff-card" ref={ledgerRef}>
        <h2>2. Ledger lines</h2>

        <p>
          Notes can be written above and below the staff using ledger lines.
          Ledger lines are short horizontal lines that extend the staff:
        </p>

        <img src={staf4} className="staff-img" alt="Ledger lines" />

        <p>
          You can use as many ledger lines as needed. Notes located just above
          or below the staff may not require ledger lines.
        </p>
      </div>

      {/* 3️⃣ LINES & SPACES */}
      <div className="staff-card" ref={linesRef}>
        <h2>3. Lines and spaces</h2>

        <p>
          The lines and spaces of the staff are counted from bottom to top.
          For example, the 1st line is the lowest line, and the 5th line is
          the top line:
        </p>

        <img src={staf5} className="staff-img" alt="Lines and spaces" />
      </div>

  </div>
  );
}
