// import https from config
import { https } from "./config";
import { GROUP_ID } from "./khoaHocService";


export const nguoiDungServ = {
  dangNhap: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  dangKy: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  getAllUser: (tenUser = '') => {
    if(tenUser !=''){
      return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tenUser}`)
    }else{
      // tenUser = '' gọi api này
      return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
    }
  },
  deleteUser: (data) => {
    return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`);
  },
  addUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung",data);
  },
  getInfoUser: (taiKhoan) => {
    // return https.get(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`);
    return https.post(`/api/QuanLyNguoiDung/ThongTinNguoiDung?taiKhoan=${taiKhoan}`);
  },
  updateInfoUser: (formData)=>{
    return https.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData)
  },
  searchUser:(taiKhoan)=>{
    return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${taiKhoan}`)
  },
};