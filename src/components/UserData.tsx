import React from "react";
import "./UserData.modules.css";
import KarimTheBackendDev from "./KarimTheBackendDev";

interface User {
  id: number;
  name: string;
  email: string;
  companyBs: string;
}

interface UserDataProps {
  users: User[];
}

const UserData: React.FC<UserDataProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <KarimTheBackendDev key={user.id} name={user.name} index={user.id} />
      ))}
    </>
  );
};

export default UserData;
