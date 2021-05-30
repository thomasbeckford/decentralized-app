export type MainAction = {
  type: string;
  payload: string;
  message: string;
};

export type LoadingAction = {
  type: string;
  payload: boolean;
};

export type UserAction = {
  type: string;
  payload: boolean;
};

export const setAddress = (object: string): MainAction => ({
  type: "NEW_ADDRESS",
  payload: object,
  message: "New balance added successfuly",
});

export const setBalance = (object: string): MainAction => ({
  type: "SET_BALANCE",
  payload: object,
  message: "New account added successfuly",
});

export const isConnected = (object: boolean): UserAction => ({
  type: "IS_CONNECTED",
  payload: object,
});

export const setLoading = (object: boolean): LoadingAction => ({
  type: "SET_LOADING",
  payload: object,
});
