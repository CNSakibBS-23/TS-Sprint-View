import React from "react";
import "./UserData.modules.css";
import TableData from "./TableData";

interface User {
  id: number;
  name: string;
}

interface UserDataProps {
  users: User[];
}

const UserData: React.FC<UserDataProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <TableData key={user.id} name={user.name} index={user.id} />
      ))}
    </>
  );
};

export default UserData;
