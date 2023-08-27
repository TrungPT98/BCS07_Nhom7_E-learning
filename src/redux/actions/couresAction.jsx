import { khoaHocServ } from "../../services/khoaHocService"
import { getUpdateCoures } from "../slices/couresSlice";

export const updateCoures = (formData) =>{
    return async (dispatch) =>{
        try{
            const result = await khoaHocServ.chinhSuaKhoaHoc(formData);
            console.log('result', result.data)
            alert('ok')
            // dispatch(getUpdateCoures(result.data))
        }catch(error){
            console.log(error.response?.data)
            alert('dasdad')
        }
    }
}