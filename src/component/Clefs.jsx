import React, { useRef } from "react";
import "./Clefs.css";
import clef1 from "../images/clef1.jpg";
import clef2 from "../images/clef2.jpg";
import clef3 from "../images/clef3.jpg";
import clef4 from "../images/clef4.jpg";
import clef5 from "../images/clef5.jpg";
import clef6 from "../images/clef6.jpg";
import clef7 from "../images/clef7.jpg";
import clef8 from "../images/clef8.jpg";
import clef9 from "../images/clef9.jpg";
import clef10 from "../images/clef10.jpg";
import clef11 from "../images/clef11.jpg";
import clef12 from "../images/clef12.jpg";
import clef13 from "../images/clef13.jpg";
import clef14 from "../images/clef14.jpg";
import clef15 from "../images/clef15.jpg";
import clef16 from "../images/clef16.jpg";
import clef17 from "../images/clef17.jpg";


export default function Clefs() {

  // 🔥 Create references for each section
  const trebleRef = useRef(null);
  const bassRef = useRef(null);
  const altoRef = useRef(null);
  const grandRef = useRef(null);
  const tenorRef = useRef(null);
  const octaveRef = useRef(null);
  const clefChangeRef = useRef(null);

  // 🔥 Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="clefs-page">

      <h1 className="clefs-title">Clefs</h1>

      {/* INTRO CARD */}
      <div className="clefs-card">
        <h2>Introduction</h2>
        <p>
          A clef is a symbol at the beginning of the staff that specifies the pitch
          of the notes on the staff. Different clefs are used to make notes easier to read.
        </p>

        {/* CONTENT LIST */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(trebleRef)}>Treble Clef</li>
            <li onClick={() => scrollToSection(bassRef)}>Bass Clef</li>
            <li onClick={() => scrollToSection(grandRef)}>Grand staff</li>
            <li onClick={() => scrollToSection(altoRef)}>Alto clef</li>
            <li onClick={() => scrollToSection(tenorRef)}>Tenor clef</li>
            <li onClick={() => scrollToSection(octaveRef)}>Octave clefs</li>
            <li onClick={() => scrollToSection(clefChangeRef)}>Clef change</li>
          </ol>
        </div>
      </div>

      {/* TREBLE CLEF */}
      <div className="clefs-card" ref={trebleRef}>
        <h2>1. Treble Clef</h2>
        <p>The treble clef (also called the G clef) indicates that the note G above middle C falls on the second line of the staff. The treble clef curls around the line where G falls:</p>
        <img src={clef1} className="clefs-img" alt="clefs" />

        <p>Below, the notes in the treble clef are compared to the notes on the piano. Notice the positions of the notes C and G on the staff. Remembering the positions of C and G make it easier to read the other notes on the staff:</p>
        <img src={clef2} className="clefs-img" alt="clefs" />
        <p>The treble clef is useful for writing notes above middle C. The treble clef is used in song books and for high-pitched instruments such as guitar, violin, flute, clarinet, saxophone, and trumpet.</p>
      </div>

      {/* BASS CLEF */}
      <div className="clefs-card" ref={grandRef}>
        <h2>2. Bass clef</h2>
        <p>The bass clef (also called the F clef) indicates that the note F below middle C falls on the fourth line of the staff. The bass clef's two dots surround the line where F falls:</p>
        <img src={clef3} className="clefs-img" alt="clefs" />
        <p>Below, the notes in the bass clef are compared to the notes on the piano. Notice the positions of the notes C and F on the staff. Remembering the positions of C and F make it easier to read the other notes on the staff:</p>
        <img src={clef4} className="clefs-img" alt="clefs" />
        <p>The bass clef is useful for writing notes below middle C. The clef is used for low-pitched instruments such as bass guitar, double bass, cello, bassoon, trombone, and tuba.</p>

      </div>

      {/* GRAND STAFF */}
      <div className="clefs-card" ref={grandRef}>
        <h2>3. Grand staff</h2>
        <p>The grand staff is a combination of two staves with the treble clef in the upper staff and the bass clef in the lower staff. The staves are connected by a vertical line and a brace at the left side:</p>
        <img src={clef5} className="clefs-img " alt="clefs" />
        <p>Middle C falls between the two staves and is written on the first ledger line below the upper staff or the first ledger line of the lower staff. Notice the symmetrical position of the different versions of the note C. Remembering their positions make it easier to read the other notes on the staff:</p>
        <img src={clef6} className="clefs-img2 " alt="clefs" />
        <p>Below, the notes of the grand staff are compared to the notes on the piano. The notes located around middle C can be written in both the upper and lower staff using one or more ledger lines:</p>

        <p>The grand staff is useful for instruments that can play both low and high notes. It is commonly used for piano, organ, marimba, and harp. Usually, the notes in the lower staff are played with the left hand and the notes in the upper staff with the right hand.</p>
        <img src={clef7} className="clefs-img " alt="clefs" />
      </div>

      {/* ALTO CLEF */}
      <div className="clefs-card" ref={altoRef}>
        <h2>4. Alto clef</h2>
        <p>The alto clef is a C clef indicating that middle C falls on the third line of the staff. The center of the alto clef pinpoints the line where middle C falls:</p>
        <img src={clef8} className="clefs-img2 " alt="clefs" />
        <p>Below, the notes in the alto clef are compared to the notes on the piano. Notice the positions of the different versions of the note C. Remembering the position of C make it easier to read the other notes on the staff:</p>
        <img src={clef9} className="clefs-img" alt="clefs" />
        <p>The alto clef has a limited scope. It is primarily used for viola. Often, however, either the treble clef or the bass clef is used instead.</p>

      </div>

      {/* TENOR CLEF */}
      <div className="clefs-card" ref={tenorRef}>
        <h2>5. Tenor Clef</h2>
        <p>The tenor clef is a C clef indicating that middle C falls on the fourth line of the staff. The center of the tenor clef pinpoints the line where middle C falls:</p>
      <img src={clef10} className="clefs-img2 " alt="clefs" />
      <p>Below, the notes in the tenor clef are compared to the notes on the piano. Notice the position of the different versions of the note C. Remembering the position of C make it easier to read the other notes on the staff:</p>
<img src={clef11} className="clefs-img" alt="clefs" />
<p>The tenor clef has a limited scope. It is primarily used for cello, bassoon, and trombone. Often, however, either the treble clef or the bass clef is used instead.</p>
      
      
      
      </div>

      {/* OCTAVE CLEFS */}
      <div className="clefs-card" ref={octaveRef}>
        <h2>6. Octave Clefs</h2>
        <p>Octave clefs are variations of the treble clef and the bass clef that indicate the notes are played in a different pitch. The number 8 above the clef means that the notes are played an octave higher than notated. The number 8 below the clef means that the notes are played an octave lower than notated.
          <br></br>For example, here are six different notations of middle C:
        </p>
          <img src={clef12} className="clefs-img " alt="clefs" />
          <p>In very rare cases, the number 8 is replaced by the number 15 indicating that the notes are played two octaves higher or lower than notated.
<br></br>
Octave clefs are used to avoid several ledger lines that are difficult to read. If only a few notes on the staff require several ledger lines, a normal clef is used in combination with one of the following symbols:</p>
<div className="octave-row">
    <img src={clef13} alt="15ma alta" className="octave-img" />
    <div>
      <h3>Quindicesima alta</h3>
      <p>
        Indicates the notes within the dotted line are played 
        <strong>two octaves higher</strong> than notated.  
        The symbol is placed above the staff.
      </p>
    </div>
  </div>

  {/* Row 2 – Ottava alta */}
  <div className="octave-row">
    <img src={clef14} alt="8va alta" className="octave-img" />
    <div>
      <h3>Ottava alta</h3>
      <p>
        Indicates the notes within the dotted line are played 
        <strong>one octave higher</strong> than notated.  
        The symbol is placed above the staff.
      </p>
    </div>
  </div>

  {/* Row 3 – Ottava bassa */}
  <div className="octave-row">
    <img src={clef15} alt="8vb bassa" className="octave-img" />
    <div>
      <h3>Ottava bassa</h3>
      <p>
        Indicates the notes within the dotted line are played 
        <strong>one octave lower</strong> than notated.  
        The symbol is placed below the staff.
      </p>
    </div>
  </div>

  {/* Row 4 – Quindicesima bassa */}
  <div className="octave-row">
    <img src={clef16} alt="15mb bassa" className="octave-img" />
    <div>
      <h3>Quindicesima bassa</h3>
      <p>
        Indicates the notes within the dotted line are played 
        <strong>two octaves lower</strong> than notated.  
        The symbol is placed below the staff.
      </p>
    </div>
  </div>
     
     
     
     
      </div>

      {/* CLEF CHANGES */}
      <div className="clefs-card" ref={clefChangeRef}>
        <h2>7. Clef Change</h2>
        <p>Usually, the same clef is used throughout a whole piece of music. However, if one or more notes are far outside the staff, you can change the clef to avoid excess ledger lines, making the notes easier to read:.</p>
      <img src={clef17} className="clefs-img" alt="clefs" />
      <p>If the clef is changed at the beginning of a new line, the clef is written both at the beginning of the new staff and at the end of the previous staff. Clefs in the middle of the staff are smaller than clefs at the beginning of the staff.</p>
      </div>

    </div>
  );
}
