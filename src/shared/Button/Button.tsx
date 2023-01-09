import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import "./Button.scss";

interface ButtonProps {
  playing: boolean;

  onClick: () => void;
}

function ChangeButton(props: ButtonProps) {
  const ButtonIcon = props.playing ? BiPauseCircle : BiPlayCircle;
  return <ButtonIcon onClick={props.onClick} />;
}

function ButtonWrapper(props: ButtonProps) {
  return (
    <button onClick={props.onClick}>
      <ChangeButton playing={props.playing} onClick={props.onClick} />
    </button>
  );
}

export default ButtonWrapper;
