import { useEffect, useState } from "react";
import UserData from "./components/UserData";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
const API = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}

const App: React.FC = () => {
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
        <table className="sprint-table">
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

export default App;
