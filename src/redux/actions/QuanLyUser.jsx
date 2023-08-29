import { khoaHocServ } from "../../services/khoaHocService";
import { nguoiDungServ } from "../../services/nguoiDungService"
import { getInfoUser } from "../slices/nguoiDungSlice";

export const getInfoUserAction = (taiKhoan) =>{
    return async (dispatch) => {
        try{
            const result = await nguoiDungServ.getInfoUser(taiKhoan)
            // console.log(result.data);
            dispatch(getInfoUser(result.data));
        }catch(err){
            console.log(err)
        }
    }
}

export const updateInfoUserAction = (formData) =>{
    return async (dispatch) => {
        try{
            const result = await nguoiDungServ.updateInfoUser(formData)
            console.log(result)
        }catch(err){
            console.log(err)

        }
    }
}

export const userCancelCourse = (maKhoaHoc) =>{
    return async (dispatch) => {
        const credentailLocal = localStorage.getItem('user')
        if (credentailLocal) {
            const credentailvalues = JSON.parse(credentailLocal)

            const cancleCoure = {
                taiKhoan: credentailvalues.taiKhoan,
                maKhoaHoc: maKhoaHoc
            }
        try{
            const result = await khoaHocServ.huyGhiDanh(cancleCoure)
            // console.log(result.data);
            dispatch(getInfoUser(result.data));
        }catch(err){
            console.log(err)
        }
    }}
}