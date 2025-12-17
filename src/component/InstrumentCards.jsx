import React from "react";
import "./InstrumentCards.css";
import piano from "../images/piano.avif";
import groovepad from "../images/groovepad.jpg";
import tuner from "../images/guiter.jpg";

const InstrumentCards = () => {
  const instruments = [
    {
      title: "Piano",
      subtitle: "CLASSIC TONES",
      desc: "Explore the soulful sound of piano with deep melodies and soft keys.",
      image: piano,
    },
    {
      title: "Groovepad",
      subtitle: "MELODIC BLEND",
      desc: "Create beats and mix loops with simple, intuitive controls.",
      image: groovepad,
    },
    {
      title: "Tuner",
      subtitle: "PERFECT PITCH",
      desc: "Fine-tune your instrument to achieve the purest and most accurate sound.",
      image: tuner,
    },
  ];

  return (
    <div className="instrument1-wrapper">
      <div className="instrument1-row">
        {instruments.map((item, i) => (
          <div
            key={i}
            className="instrument1-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* ONLY TEXT BACKGROUND */}
            <div className="instrument1-textbox">
              <span className="instrument1-subtitle">{item.subtitle}</span>
              <h3 className="instrument1-title">{item.title}</h3>
              <p className="instrument1-desc">{item.desc}</p>
              <button className="instrument1-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentCards;
