import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../util/localStore";
import { nguoiDungServ } from "../../services/nguoiDungService";

// createAsynThunk xử lý bất đồng bộ
export const getAllUserThunk = createAsyncThunk(
  "nguoiDung/getAllUser",
  async () => {
    const res = await nguoiDungServ.getAllUser();
    return res.data;
  }
);

const initialState = {
  name: layDuLieuLocal("user"),
  users: [],
  infoUser: {},
  userAddCoures: {},
};
// setup reduxtoolkit
export const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    // tạo 1 phương thức xử lý state bên trên store redux
    setName: (state, action) => {
      //check name có dữ liệu hay không
      if (state.name == null) {
        // useDispatch
        state.name = action.payload;
      }
    },
    getInfoUser: (state,action) => {
      state.infoUser = action.payload
    },
    setNameAdd: (state,action) => {
      state.userAddCoures = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUserThunk.fulfilled, (state, action) => {
      // console.log(action);
      // console.log(state);
      state.users = action.payload;
    });
  },
});

// sử dụng phương thức trong {} dưới component
export const { setName, getInfoUser, setNameAdd } = nguoiDungSlice.actions;

// import vào store redux
export default nguoiDungSlice.reducer;