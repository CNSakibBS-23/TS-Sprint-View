import React from "react";
import { DraggedItem } from "./TableData";
import { useDrop } from "react-dnd";

function DropArea({ children, setBoard }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "DIV",
    drop: (item: DraggedItem) => addCardToBoard(item),
    collect: (monitor) => {
      // console.log(monitor);
      return {
        isOver: !!monitor.isOver(),
      };
    },
  }));

  const addCardToBoard = (draggedItem: DraggedItem) => {
    console.log(draggedItem);
    setBoard((prevBoard: any) => [...prevBoard, draggedItem]);
  };

  return <td ref={drop}>{children}</td>;
}

export default DropArea;
