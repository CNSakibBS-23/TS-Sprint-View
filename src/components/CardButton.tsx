import React from "react";
import styles from "./CardButton.module.css";
interface CardButtonProps {
  text: string;
  color?: boolean;
  onClick?: () => void;
}
const CardButton: React.FC<CardButtonProps> = ({ text, color, onClick }) => {
  return (
    <button className={color ? styles.blue : styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default CardButton;
