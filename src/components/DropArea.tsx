import React from "react";
import Card from "./Card";
import { DraggedItem } from "./KarimTheBackendDev";

interface DropAreaProps {
  board: DraggedItem[];
}

const DropArea: React.FC<DropAreaProps> = ({ board }) => {
  const uniqueBoard = board.filter(
    (task, index, self) => index === self.findIndex((t) => t.id === task.id)
  );

  return (
    <div>
      {uniqueBoard.map((task) => (
        <Card
          key={task.id}
          name={task.name}
          id={task.id}
          remainingHour={task.remainingHour}
        />
      ))}
    </div>
  );
};

export default DropArea;
