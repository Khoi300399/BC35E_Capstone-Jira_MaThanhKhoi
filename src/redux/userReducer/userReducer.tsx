import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserModel,
  userState,
  userType,
  UserUpdateType,
} from "../../types/global";
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
  userAll: [],
  userByKeyword: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state: userState, action: PayloadAction<userType>) => {
      state.userLogin = action.payload;
    },

    getUserAction: (state: userState, action: PayloadAction<UserModel[]>) => {
      state.userAll = action.payload;
    },
    getUserByKeywordAction: (
      state: userState,
      action: PayloadAction<UserModel[]>
    ) => {
      state.userAll = action.payload;
    },
  },
});

export const { loginAction, getUserAction, getUserByKeywordAction } =
  userReducer.actions;

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

export const getUserApi = (name?: string) => {
  return async (dispatch: DispathType) => {
    if (name) {
      const res = await http.get(`/Users/getUser?keyword=${name}`);
      // sau khi call api thành công
      let action: PayloadAction<UserModel[]> = getUserByKeywordAction(
        res.data.content
      );
      dispatch(action);
    } else {
      const res = await http.get("/Users/getUser");
      // sau khi call api thành công
      let action: PayloadAction<userType[]> = getUserAction(res.data.content);
      dispatch(action);
    }
  };
};

export const registerApi = (userRegister: userType) => {
  return async (dispatch: DispathType) => {
    const res = await http.post("/Users/signup", userRegister);

    console.log("res", res.data.content);
  };
};

export const updateUserApi = (userUpdate: UserUpdateType) => {
  return async (dispatch: DispathType) => {
    await http.put("/Users/editUser", userUpdate);
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.delete(`/Users/deleteUser?id=${id}`);
  };
};
