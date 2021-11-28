import { createSelector } from "reselect";

export interface RootState {
  address: string;
  balance: number;
  user: UserState;
  loading: boolean;
}

export type UserState = {
  name: string;
  email: string;
  avatar: string;
  isConnected: boolean;
};

const selectRootState = (state: RootState): RootState => state;

export const getAddressInfo = createSelector(selectRootState, (state) => state.address);
export const getBalanceInfo = createSelector(selectRootState, (state) => state.balance);
export const getUserInfo = createSelector(selectRootState, (state) => state.user);
export const getUserConnection = createSelector(selectRootState, (state) => state.user.isConnected);
export const getLoadingStatus = createSelector(selectRootState, (state) => state.loading);
