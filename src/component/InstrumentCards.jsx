import React from "react";
import "./InstrumentCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import instruments1 from "../images/piano.avif"
//import instruments2 from "../images/harmony.jpg"
import instruments2 from "../images/groovepad.jpg"
import instruments3 from "../images/guiter.jpg"


const InstrumentCards = () => {
  const instruments = [
    {
      title: "Piano",
      subtitle: "CLASSIC TONES",
      description: "Explore the soulful sound of piano with deep melodies and soft keys.",
      image: instruments1, // piano image
    },
    {
      title: "Groovepad",
      subtitle: "MELODIC BLEND",
      description: "Create beats and mix loops with simple, intuitive controls.",
      image: instruments2 , // groovepad image
    },
    {
      title: "Tuner",
      subtitle: "PERFECT PITCH",
      description: "Fine-tune your instrument to achieve the purest and most accurate sound.",
      image:instruments3, // groovepad image
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {instruments.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="instrument-card text-white d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay p-4">
                <h6 className="subtitle">{item.subtitle}</h6>
                <h3 className="title mb-3">{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn btn-light mt-3">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentCards;
