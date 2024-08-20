import React from "react";
import TaskManager from "./TaskManager";
import "./UserData.modules.css";

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

const UserData: React.FC<UserDataProps> = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name } = curUser;
        const { bs } = curUser.company;

        return (
          <tr key={id}>
            <td id="name_formatting">
              <div className="name_style">
                <h4>{name}</h4>
                <p>Total Remaining Time: 57h</p>
              </div>
            </td>
            <td>
              <TaskManager />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
