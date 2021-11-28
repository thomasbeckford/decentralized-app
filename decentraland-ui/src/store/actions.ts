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

export const setAddress = (payload: string): MainAction => ({
  type: "NEW_ADDRESS",
  payload,
  message: "New balance added successfully",
});

export const setBalance = (payload: string): MainAction => ({
  type: "SET_BALANCE",
  payload,
  message: "New account added successfully",
});

export const setConnected = (payload: boolean): UserAction => ({
  type: "SET_CONNECTED",
  payload,
});

export const setLoading = (payload: boolean): LoadingAction => ({
  type: "SET_LOADING",
  payload,
});
