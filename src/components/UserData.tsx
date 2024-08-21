import React, { useState } from "react";
import TaskManager from "./TaskManager";
import "./UserData.modules.css";

import DropArea from "./DropArea";
import KarimTheBackendDev from "./KarimTheBackendDev";

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface Company {
  bs: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
}

interface UserDataProps {
  users: User[];
}
interface DraggedItem {
  id: string;
  name: string;
  remainingHour: number;
}

const UserData: React.FC<UserDataProps> = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name } = curUser;
        const { bs } = curUser.company;

        return <KarimTheBackendDev key={id} name={name} index={id} />;
      })}
    </>
  );
};

export default UserData;
