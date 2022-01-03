import React, { useContext, useState } from "react";
import "./Home.css";
import { GlobalContext } from "../../context/GlobalState";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { addUser } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currentValue) => {
      return {
        ...currentValue,
        [name]: value,
      };
    });
  };

  const handleADD = () => {
    if (
      userInfo.name.trim() === "" ||
      userInfo.email.trim() === "" ||
      userInfo.phone.trim() === "" ||
      userInfo.address.trim() === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    addUser(userInfo);
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="home">
      <h1>Enter User Information</h1>
      <div className="home__container">
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          autoFocus
          value={userInfo.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <label>Phone Number</label>
        <br />
        <input
          name="phone"
          type="tel"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <br />
        <label>Address</label>
        <br />
        <textarea
          name="address"
          rows={6}
          value={userInfo.address}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleADD}>Add User</button>
      </div>
    </div>
  );
};

export default Home;
