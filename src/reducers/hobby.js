const initialState = {
  list: [
    {
      name: "Coding",
      id: 1,
    },
  ],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      console.log("state in reducer: ", action.payload);
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };

    case "SET_ACTIVE_HOBBY":
      return state;

    case "REMOVE_HOBBY":
      const listHobby = [...state.list];
      const newListHobby = listHobby.filter(
        (hobby) => hobby.id !== action.payload.id
      );
      return {
        ...state,
        list: newListHobby,
      };
    default:
      return state;
  }
};

export default hobbyReducer;
