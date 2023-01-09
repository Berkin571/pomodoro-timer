import { FiSettings } from "react-icons/fi";
import "./Settings.scss";

function Settings() {
  return (
    <button className="settings-btn">
      <span>Einstellungen</span>
      <FiSettings />
    </button>
  );
}

export default Settings;
