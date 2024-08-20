import { Dispatch, SetStateAction } from "react";
import styles from "./Card.module.css";
import CardButton from "./CardButton";

interface CardProps {
  name: string;
  id: string;
  remainingHour: number;
}

const Card: React.FC<CardProps> = ({ name, id, remainingHour }) => {
  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };
  const truncatedName = truncateText(name, 22);
  const handleRemainingHour = () => {};
  return (
    <div className={styles.task}>
      <div className={styles.task_info}>
        <p className={styles.task_name}>
          <strong>{truncatedName}</strong>
        </p>
        <p className="task-id">{id}</p>
      </div>
      <div className={styles.task_times}>
        <p className={styles.remainingHour}>
          Remaining Hour: <b>{remainingHour}h</b>
        </p>
        <div className={styles.task_buttons}>
          <CardButton text="+ Spent" />
          <CardButton text="+ Remaining" onClick={handleRemainingHour} />
          <CardButton text="Add" color={true} />
        </div>
      </div>
    </div>
  );
};

export default Card;
