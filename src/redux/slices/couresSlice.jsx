import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khoaHocServ } from "../../services/khoaHocService";


// createAsynThunk xử lý bất đồng bộ
// export const layDanhSachKhoaHocThunk = createAsyncThunk(
//   "coures/layDanhSachKhoaHoc",
//   async () => {
//     const res = await khoaHocServ.layDanhSachKhoaHoc();
//     return res.data;
//   }
// );

const initialState = {
  coures: [],
  infoCoures: {},
  updateCoures: {},
  stateBtn: true,
};
// setup reduxtoolkit
export const couresSlice = createSlice({
  name: "coures",
  initialState,
  reducers: {
    // tạo 1 phương thức xử lý state bên trên store redux
    
    getInfoCoures: (state,action) => {
      state.infoCoures = action.payload
    },
    getUpdateCoures: (state, action)=>{
      state.updateCoures = action.payload
    },
    setStateBtn: (state, action)=>{
      state.stateBtn = action.payload
    },
    getAllCoures: (state, action)=>{
      state.coures = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(layDanhSachKhoaHocThunk.fulfilled, (state, action) => {
  //     // console.log(action);
  //     // console.log(state);
  //     state.coures = action.payload;
  //   });
  // },
});

// sử dụng phương thức trong {} dưới component
export const {getInfoCoures, getUpdateCoures, setStateBtn,getAllCoures } = couresSlice.actions;

// import vào store redux
export default couresSlice.reducer;