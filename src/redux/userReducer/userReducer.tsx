import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState, userType } from "../../types/global";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setStoreJson,
  USER_LOGIN,
} from "../../util/setting";
import { DispathType } from "../config";

const initialState: userState = {
  userLogin: getStoreJson(USER_LOGIN) ? getStoreJson(USER_LOGIN) : null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state: userState, action: PayloadAction<userType>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginAction } = userReducer.actions;

export default userReducer.reducer;

/*--------------- action async --------------- */

export const loginApi = (userLogin: userType) => {
  return async (dispatch: DispathType) => {
    const res = await http.post("/Users/signin", userLogin);
    // Sau khi đăng nhập thành công
    let action: PayloadAction<userType> = loginAction(res.data.content);
    dispatch(action);

    //  Lưu đăng nhập thành công vào localstorage
    setStoreJson(USER_LOGIN, res.data.content);
    setStoreJson(ACCESS_TOKEN, res.data.content.accessToken);
  };
};

export const registerApi = (userRegister: userType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Users/signup", userRegister);
  };
};

export const updateUserApi = (userUpdate: userType) => {
  return async (dispatch: DispathType) => {
    await http.put("/Users/editUser", userUpdate);
  };
};

export const deleteUserApi = (idUser: userType) => {
  return async (dispatch: DispathType) => {
    await http.put(`/Users/deleteUser?id=${idUser}`);
  };
};
