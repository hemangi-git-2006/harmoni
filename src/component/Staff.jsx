import React from "react";
import "./Staff.css";
import staf from "../images/stf1.png";
import staf2 from "../images/stf2.png";


export default function Staff() {

  

  return (
    <div className="notes-page">

      {/* MAIN TITLE */}
      <h1 className="notes-title">The staff</h1>

      {/* INTRODUCTION CARD */}
      <div className="notes-card">
        <h1>Introduction</h1>

        <p>
          The staff (also called the stave) is a collection of five horizontal lines used for music notation. Notes can be written on the lines and in between the spaces. The plural form of both staff and stave is staves.
        </p>

        {/* CONTENT BOX */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li>Staff positions</li>
            <li>Ledger lines</li>
            <li>Lines and spaces</li>
         
          </ol>
        </div>
      </div>

      {/* 1️⃣ staff position */}
      <div className="staff-card">
        <h2>1. Staff positions</h2>
        <p>The staff consists of five horizontal lines and four spaces:
        
        </p>
        {/* <img src={staf} alt="" /> */}
         <img src={staf}  className="staff-img" alt="Middle C" />
        

        <p>
          Notes can be written on the lines and in between the spaces. When a note is written on a line, the line passes through the center of the note and when a note is written in a space, the note fills the entire space:
        </p>

        <img src={staf2}  className="staff-img" alt="..." />
        <p>The black keys are arranged in alternating groups of two and three. The note C is always on the white key to the left of the group of two black keys. Each note is in several places on the piano; the further to the right a note is located, the higher it is, and the further to the left, the lower it is.</p>

        <p className="caption">
          The black keys are arranged in alternating groups of two and three.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="staff-card">
        <h2>2. Middle C</h2>
        <p>The middlemost C on the piano is called middle C. On a standard piano with 88 keys, middle C is the fourth C from the left. Click on the piano to hear the note:</p>
        <img src="/images/middle-c.png" className="staff-img" alt="Middle C" />
        <p className="caption">Middle C</p>
        <p>Middle C is an essential reference point. The specific high or low version of a note you play is important, and using middle C as the reference point, makes it easier to play the right version of the note.</p>
      </div>

      {/* SECTION 3 */}
      <div className="staff-card">
        <h2>3. Octaves</h2>
        <p>A standard piano with 88 keys has seven to eight versions of each note. The distance from any note to the nearest lower or higher version of the same note is called an octave:</p>
        <img src="/images/octaves.png" className="staff-img" alt="Octaves" />
        <p>Usually, a note is referred to with the same name, regardless of whether it is low or high. However, there is a system for naming low and high notes that can be used if you need to distinguish between them. In this system, a number is added after the name of the note corresponding to the octave number in which the note falls.

Each octave, starting from the note C, has a number. The octave of the lowest C on the piano has number 1, while the octave of the highest C has number 8. All notes from C up to the next octave have the same number (e.g., C1, D1, E1, F1, G1, A1 and B1). These are the most common octaves and their numbers:</p>
      </div>

      {/* SECTION 4 */}
      <div className="notes-card">
        <h2>4. Half steps and whole steps</h2>
        <p>The distance between each of the twelve different notes is called a half step, or, a semitone. That is, the distance from any white or black key on the piano to the key immediately to its right or left, is a half step.

The distance between the natural notes E and F and the natural notes B and C is a half step (1), while the distance between all other keys is two half steps (2):</p>
        <img src="/images/half-steps.png" className="notes-img" alt="Half Steps" />
        <p className="caption">The distance of two half steps is also called a whole step or a whole tone.</p>
      </div>

    </div>
  );
}
