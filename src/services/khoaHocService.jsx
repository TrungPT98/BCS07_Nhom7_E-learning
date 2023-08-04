import { lazy } from 'react'
import {https} from './config'

export const khoaHocServ = {
    layDanhMucKhocHoc: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    layDanhSachKhoaHoc: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    },
    layKhoaHocTheoDanhMuc: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`)
    },
    layDanhSachKhoaHocPhanTrang: (data) =>{
        return https.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${data}&pageSize=8  &MaNhom=GP01`)
    }
}