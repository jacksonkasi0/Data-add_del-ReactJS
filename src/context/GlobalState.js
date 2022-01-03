import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      data: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type:"DELETE_USER",
      userId:id
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addUser,
        deleteUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
