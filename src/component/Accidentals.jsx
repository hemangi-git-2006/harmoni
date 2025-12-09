import React from "react";
import "./Accidentals.css";


 export default function Accidentals() {


  

  return (
    <div className="accidentals-page">

      {/* MAIN TITLE */}
      <h1 className="accidentals-title">The staff</h1>

      {/* INTRODUCTION CARD */}
      <div className="accidentals-card">
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
      <div className="accidentals-card">
        <h2>1. Staff positions</h2>
        <p>The staff consists of five horizontal lines and four spaces:
        
        </p>
        
        

        <p>
          Notes can be written on the lines and in between the spaces. When a note is written on a line, the line passes through the center of the note and when a note is written in a space, the note fills the entire space:
        </p>

        <p>Each note on the staff represents a natural note. The higher a note is located, the higher the pitch, and the lower a note is located, the lower the pitch.

     <br></br>Notes are read from left to right. That is, the notes on the left are played before the notes on the right. Notes written above each other are played at the same time:</p>
      
        </div>

      {/* SECTION 2 */}
      <div className="accidentals-card">
        <h2>2. Ledger lines</h2>
        <p>Notes can be written above and below the staff using ledger lines. Ledger lines are short lines that extend the staff when notes are too high or low to write on the staff itself:</p>
      
     
        <p>You can use as many ledger lines as you need. Notes located just above and below the staff are written without ledger lines.</p>
      </div>

      {/* SECTION 3 */}
      <div className="accidentals-card">
        <h2>3. Lines and spaces</h2>
        <p>The lines and spaces of the staff are counted from bottom to top. For example, the 1st line is the bottom line, while the 5th line is the top line:</p>
       
       
      </div>

     

    </div>
  );
}
