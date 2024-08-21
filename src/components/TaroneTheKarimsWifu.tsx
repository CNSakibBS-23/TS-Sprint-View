import React from "react";
import { DraggedItem } from "./KarimTheBackendDev";
import { useDrop } from "react-dnd";

function TaroneTheKarimsWifu({ children, setBoard }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "DIV",
    drop: (item: DraggedItem) => addCardToBoard(item),
    collect: (monitor) => {
      console.log(monitor);
      return {
        isOver: !!monitor.isOver(),
      };
    },
  }));

  const addCardToBoard = (draggedItem: DraggedItem) => {
    console.log(draggedItem);
    setBoard((prevBoard) => [...prevBoard, draggedItem]);
  };

  return <td ref={drop}>{children}</td>;
}

export default TaroneTheKarimsWifu;
