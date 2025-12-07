import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnMusicSection.css";
import piano from "../images/piano.png"

const LearnMusicSection = () => {
  return (
    <section className="learn-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT TEXT SIDE */}
          <div className="col-md-6">
            <h6 className="fw-bold text-uppercase theme-color mb-3">
              Fun & Easy
            </h6>
            <h1 className="fw-bold display-5 mb-4">
              Learn to play music at home, at your own pace
            </h1>
            <p className="text-secondary mb-3">
              Yousician makes learning to play an instrument fun and easy, no
              matter your skill level.
            </p>
            <p className="text-secondary mb-3">
              Follow lesson plans created by real music teachers, learn fast
              with interactive tutorials, and stay motivated with goals and
              progress tracking.
            </p>
            <p className="text-secondary">
              Our award-winning technology listens to you play and gives instant
              feedback on your accuracy and timing. You always know when you’re
              hitting the right notes.
            </p>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={piano}
              alt="Person playing guitar"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMusicSection;
