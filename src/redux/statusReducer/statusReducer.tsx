import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statusState, statusType } from "../../types/global";
import { http } from "../../util/setting";
import { DispathType } from "../config";

const initialState: statusState = {
  statuses: [],
};

const statusReducer = createSlice({
  name: "statusReducer",
  initialState,
  reducers: {
    getStatusAction: (
      state: statusState,
      action: PayloadAction<statusType[]>
    ) => {
      state.statuses = action.payload;
    },
  },
});

export const { getStatusAction } = statusReducer.actions;

export default statusReducer.reducer;

/*--------------- action async --------------- */

export const getStatusApi = () => {
  return async (dispatch: DispathType) => {
    const res = await http.get("/Status/getAll");
    // Sau khi call api thành công
    let action: PayloadAction<statusType[]> = getStatusAction(res.data.content);
    dispatch(action);
  };
};
