import { v4 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "milk" },
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Meat" },
    { id: uuid(), name: "Water" },
  ],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== actions.payload),
      };
    default:
      return state;
  }
}
