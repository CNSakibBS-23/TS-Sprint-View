import React, { Dispatch, SetStateAction, useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { DraggedItem } from "./KarimTheBackendDev";

interface DropAreaProps {
  setBoard: Dispatch<SetStateAction<DraggedItem[]>>;
  index: number;
}
const DropArea: React.FC<DropAreaProps> = ({ board }) => {
  return (
    <div>
      {board.map((task) => (
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
