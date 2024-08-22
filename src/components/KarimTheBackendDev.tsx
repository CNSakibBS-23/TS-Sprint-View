import { useDrop } from "react-dnd";
import TaskManager from "./TaskManager";
import React, { useState } from "react";
import DropArea from "./DropArea";
import CnsTheFrontEndDev from "./CnsTheFrontEndDev";
export interface DraggedItem {
  id: string;
  name: string;
  remainingHour: number;
}

function KarimTheBackendDev({ index, name }) {
  const [board, setBoard] = useState<DraggedItem[]>([]);
  const [board2, setBoard2] = useState<DraggedItem[]>([]);
  const [board3, setBoard3] = useState<DraggedItem[]>([]);

  return (
    <tr>
      <td id="name_formatting">
        <div className="name_style">
          <h4>{name}</h4>
          <p>Total Remaining Time: 57h</p>
        </div>
      </td>
      <td>
        <TaskManager />
      </td>
      <CnsTheFrontEndDev setBoard={setBoard}>
        <DropArea board={board} />
        <TaskManager />
      </CnsTheFrontEndDev>
      <CnsTheFrontEndDev setBoard={setBoard2}>
        <DropArea board={board2} />
      </CnsTheFrontEndDev>
      <CnsTheFrontEndDev setBoard={setBoard3}>
        <DropArea board={board3} />
      </CnsTheFrontEndDev>
    </tr>
  );
}

export default KarimTheBackendDev;
