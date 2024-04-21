import telegramIcon from "./assets/telegramIcon.png";
import "./css/TelegramButton.css";

export default function TelegramButton() {
  return (
    <div className="container">
      <div className="container2">
        <a className="link" href="https://t.me/ShyraqGid_bot">
          <img src={telegramIcon} className="telegram" />
        </a>
      </div>
    </div>
  );
}
