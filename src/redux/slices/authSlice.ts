import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  cell: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

const savedUser = JSON.parse(localStorage.getItem("user") || "null");
const savedToken = localStorage.getItem("token") || null;

const initialState: AuthState = {
  token: savedToken,
  user: savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
export type { User };
