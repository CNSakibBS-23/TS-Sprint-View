import { useDrop } from "react-dnd";
import CreateTask from "./CreateTask";
import React, { useState } from "react";
import UniqueCard from "./UniqueCard";
import DropArea from "./DropArea";
export interface DraggedItem {
  id: string;
  name: string;
  remainingHour: number;
}

function TableData({ index, name }) {
  const [board, setBoard] = useState<DraggedItem[]>([]);
  const [board2, setBoard2] = useState<DraggedItem[]>([]);
  const [board3, setBoard3] = useState<DraggedItem[]>([]);

  console.log(board, board2, board3);

  return (
    <tr>
      <td id="name_formatting">
        <div className="name_style">
          <h4>{name}</h4>
          <p>Total Remaining Time: 57h</p>
        </div>
      </td>
      <td>
        <CreateTask />
      </td>
      <DropArea setBoard={setBoard}>
        <UniqueCard board={board} />
        <CreateTask />
      </DropArea>
      <DropArea setBoard={setBoard2}>
        <UniqueCard board={board2} />
      </DropArea>
      <DropArea setBoard={setBoard3}>
        <UniqueCard board={board3} />
      </DropArea>
    </tr>
  );
}

export default TableData;
