import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.scss";
import ButtonWrapper from "../../shared/Button/Button";
import Settings from "../Settings/Settings";

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="timer">
      <CircularProgressbar
        value={30}
        text={`${30}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255,255,255, 0.2",
        })}
      />
      <ButtonWrapper playing={!isPlaying} onClick={handleClick} />
      <div className="timer__settings">
        <Settings />
      </div>
    </div>
  );
}

export default Timer;
