import { lazy } from 'react'
import {https} from './config'

export const khoaHocServ = {
    layDanhMucKhocHoc: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    layDanhSachKhoaHoc: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP02')
    },
    layKhoaHocTheoDanhMuc: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`)
    }
}