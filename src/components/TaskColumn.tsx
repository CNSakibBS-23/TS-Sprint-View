import React from "react";
import styles from "./TaskColumn.module.css";

const TaskColumn = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Members</th>
            <th>Sprint Task</th>
            <th>What I Did Yesterday?</th>
            <th>What I Will Do Today</th>
            <th>Blocker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskColumn;
