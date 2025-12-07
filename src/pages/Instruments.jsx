import React, { useState } from "react";
import Instmain from "../component/Instmain";
import VirtualPiano from "../component/VirtualPiano";

function Instruments() {
  const [showPiano, setShowPiano] = useState(false);

  return (
    <div>
      {/* Show Instmain until Play Now is clicked */}
      {!showPiano && (
        <Instmain onPlayNow={() => setShowPiano(true)} />
      )}

      {/* Show Piano only when Play Now is clicked */}
      {showPiano && (
        <VirtualPiano onClose={() => setShowPiano(false)} />
      )}
    </div>
  );
}

export default Instruments;

