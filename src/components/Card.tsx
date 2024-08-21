import { useState } from "react";
import styles from "./Card.module.css";
import CardButton from "./CardButton";
import React from "react";
import { useDrag } from "react-dnd";

interface CardProps {
  name: string;
  id: string;
  remainingHour: number;
}

const Card: React.FC<CardProps> = ({ name, id, remainingHour }) => {
  const [remainingCardHour, setRemainingCardHour] = useState(remainingHour);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DIV",
    item: { id: id, name: name, remainingHour: remainingCardHour },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };
  const truncatedName = truncateText(name, 22);
  const handleRemainingHour = () => {
    setRemainingCardHour((prev) => prev + 1);
  };
  const handleSpentHour = () => {
    setRemainingCardHour((prev) => prev - 1);
  };
  return (
    <div className={styles.task} ref={drag}>
      <div className={styles.task_info}>
        <p className={styles.task_name}>
          <strong>{truncatedName}</strong>
        </p>
        <p className="task-id">{id}</p>
      </div>
      <div className={styles.task_times}>
        <p className={styles.remainingHour}>
          Remaining Hour: <b>{remainingCardHour}h</b>
        </p>
        <div className={styles.task_buttons}>
          <CardButton text="+ Spent" onClick={handleSpentHour} />
          <CardButton text="+ Remaining" onClick={handleRemainingHour} />
          <CardButton text="Add" color={true} />
        </div>
      </div>
    </div>
  );
};

export default Card;
