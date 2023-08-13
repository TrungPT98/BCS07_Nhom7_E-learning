// config để khi gọi api không phải truyền đi truyền lại nhiều lần

// import axios
import axios from "axios";
import { layDuLieuLocal } from "../util/localStore";
// tạo biến để chứa đường dẫn trùng
const BASE_URL = "https://elearningnew.cybersoft.edu.vn";
//tạo biến để chứ tokenCybersoft
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4";

const TokenAuthorization = layDuLieuLocal("user");

// tạo hàm configHeaderAxios đề return về biến TokenCybersoft chứ token
const configHeaderAxios = () => {
  return {
    TokenCybersoft,
    Authorization: `Bearer ` + TokenAuthorization?.accessToken,
  };
};

// tạo biến https theo chuẩn và export nó
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaderAxios(),
});