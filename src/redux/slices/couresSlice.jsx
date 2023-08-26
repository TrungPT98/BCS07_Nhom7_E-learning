import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khoaHocServ } from "../../services/khoaHocService";


// createAsynThunk xử lý bất đồng bộ
export const layDanhSachKhoaHocThunk = createAsyncThunk(
  "coures/layDanhSachKhoaHoc",
  async () => {
    const res = await khoaHocServ.layDanhSachKhoaHoc();
    return res.data;
  }
);

const initialState = {
  coures: [],
  infoCoures: {},
};
// setup reduxtoolkit
export const couresSlice = createSlice({
  name: "coures",
  initialState,
  reducers: {
    // tạo 1 phương thức xử lý state bên trên store redux
    
    getInfoCoures: (state,action) => {
      state.infoCoures = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(layDanhSachKhoaHocThunk.fulfilled, (state, action) => {
      // console.log(action);
      // console.log(state);
      state.coures = action.payload;
    });
  },
});

// sử dụng phương thức trong {} dưới component
export const {getInfoCoures } = couresSlice.actions;

// import vào store redux
export default couresSlice.reducer;