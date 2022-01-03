const AppReducer = (state, action) => {
  switch (action.type) {

    case "ADD_USER":
      return {
        users: [...state.users, action.data],
      };

      case "DELETE_USER":
      const tempUsers = state.users.filter((user, index) => {
        return index !== action.userId;
      });
      return {
        users: [...tempUsers],
      };

      default:
      return state;
  }
};

export default AppReducer;
