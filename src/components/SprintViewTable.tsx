import React, { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UserData from "../components/UserData";
import styles from "./SprintViewTable.module.css";

interface User {
  id: number;
  name: string;
}

const SprintViewTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async (url: string): Promise<void> => {
    try {
      const res = await fetch(url);
      const data: User[] = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <table className={styles.sprint_table} style={{ fontSize: "4em" }}>
          <thead>
            <tr>
              <th>Member</th>
              <th>Sprint Task</th>
              <th>What I did yesterday</th>
              <th>What I will do today</th>
              <th>Blocker</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </DndProvider>
    </>
  );
};

export default SprintViewTable;
