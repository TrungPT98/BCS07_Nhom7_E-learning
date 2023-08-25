import { lazy } from 'react'
import {https} from './config'

export const GROUP_ID = 'GP01'


export const khoaHocServ = {
    layDanhMucKhocHoc: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    layDanhSachKhoaHoc: () =>{
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
    },
    layKhoaHocTheoDanhMuc: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=${GROUP_ID}`)
    },
    layDanhSachKhoaHocPhanTrang: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${data}&pageSize=8  &MaNhom=${GROUP_ID}`)
    },
    layThongTinKhoaHoc: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${data}`)
    },
    xoaKhoaHoc: (data) =>{
        return https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`)
    },
    themKhoahoc: (formData) => {
        return https.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData)
    },
    chinhSuaKhoaHoc: (formData) => {
        return https.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, formData)
    }

}