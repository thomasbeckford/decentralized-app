import { UserState } from "./selectors";

export interface MainState {
  message: string;
  address: string | null;
  balance: number;
  user: UserState;
}

const initialState = {
  message: "",
  address: null,
  balance: 0,
  loading: false,
  user: {
    name: "",
    email: "",
    avatar: "",
    isConnected: false,
  },
};

export const reducers = (state: MainState = initialState, action: any) => {
  switch (action.type) {
    case "NEW_ADDRESS": {
      return { ...state, address: action.payload, message: action.message };
    }
    case "SET_BALANCE": {
      return { ...state, balance: action.payload, message: action.message };
    }

    case "SET_CONNECTED": {
      return {
        ...state,
        user: {
          ...state.user,
          isConnected: action.payload,
        },
      };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    default: {
      return state;
    }
  }
};
