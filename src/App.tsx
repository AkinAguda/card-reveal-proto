import { useState, useRef } from "react";
import "./App.css";
import { mc } from "./helpers";
import c from "./app.module.scss";

const App = () => {
  const openedOnce = useRef(false);
  const [reveal, setReveal] = useState(false);
  const click = () => {
    setReveal(!reveal);
    if (!openedOnce.current) {
      openedOnce.current = true;
    }
  };
  return (
    <div
      className={mc(
        c.scene,
        [reveal, c.reveal],
        [!reveal && openedOnce.current, c.hide]
      )}
    >
      <button className={c.toggler} onClick={click}>
        Toggle
      </button>
      <div className={c.cardLayer}>
        <div className={c.cardShadows}>
          <div className={c.rotatingColors}>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className={c.card}>
          <div className={c.front}>
            <h1>BACK OF CARD</h1>
          </div>
          <div className={c.back}>
            <h1>FRONT OF CARD</h1>
          </div>
          <div className={c.top} />
          <div className={c.bottom} />
          <div className={c.left} />
          <div className={c.right} />
          <div className={c.backCover} />
        </div>
      </div>
    </div>
  );
};

export default App;
