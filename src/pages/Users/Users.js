import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import User from "../../components/User/User";
import './Users.css'

const Users = () => {
  const { users,deleteUser } = useContext(GlobalContext);
  return (
    <div className="users">
      {users.map((user, index) => {
        return <User user={user} key={index} deleteUser={()=>deleteUser(index)} />;
      })}
    </div>
  );
};

export default Users;
