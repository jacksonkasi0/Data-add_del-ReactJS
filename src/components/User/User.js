import React from "react";
import "./User.css";

const User = ({ user: { name, email, phone, address }, deleteUser }) => {
  return (
    <div className="user">
      <h1 className="user__title">{name}</h1>
      <div>
        <h4>Email:</h4>
        <p>{email}</p>
      </div>

      <div>
        <h4>Phone:</h4>
        <p>{phone}</p>
      </div>

      <div>
        <h4>Address:</h4>
        <p>{address}</p>
      </div>
      <div>
        <button className="user_deleteButton" onClick={deleteUser}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
