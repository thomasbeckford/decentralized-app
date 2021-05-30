export interface MainState {
  message: string;
  address: string | null;
  balance: number;
}

const initialState = {
  message: "",
  address: null,
  balance: 0,
  loading: false,
  connected: false,
};

export const reducers = (state: MainState = initialState, action: any) => {
  switch (action.type) {
    case "NEW_ADDRESS": {
      return { ...state, address: action.payload, message: action.message };
    }
    case "SET_BALANCE": {
      return { ...state, balance: action.payload, message: action.message };
    }

    case "IS_CONNECTED": {
      return { ...state, connected: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    default: {
      return state;
    }
  }
};
