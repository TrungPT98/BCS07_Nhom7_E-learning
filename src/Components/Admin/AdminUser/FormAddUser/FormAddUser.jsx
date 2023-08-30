import React from "react";
// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";

import { Space, Table, Tag, Button, Modal, message } from "antd";
import { nguoiDungServ } from "../../../../services/nguoiDungService";
import { GROUP_ID } from "../../../../services/khoaHocService";
const FormAddUser = () => {
  // message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thêm thành công",
    });
  };
  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };

  // Xử lý form
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: GROUP_ID,
      email: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .min(2, "Tài khoản quá ít kí tự")
        .max(16, "Tài khoản quá 16 kí tự")
        .required("Tài khoản không được để trống"),
      matKhau: Yup.string()
        .required("Tài khoản không được để trống")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt"
        ),
      hoTen: Yup.string()
        .required("Tên không được để trống")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Chỉ nhập kí tự chữ"
        ),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),

      soDT: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(
          /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
          "Số điện thoại chưa đúng định đạng"
        ),
    }),
    // addUser
    onSubmit: (values) => {
      console.log(values);
      nguoiDungServ
        .addUser(values)
        .then((res) => {
          console.log(res);
          success();
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          error(err.response.data);
        });
    },
  });

  // boc tách
  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  return (
    <>
      {contextHolder}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            class="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.taiKhoan}
          />
          {errors.taiKhoan && touched.taiKhoan ? (
            <div className="text-red-500">{errors.taiKhoan}</div>
          ) : (
            ""
          )}

          <label
            for="taiKhoan"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tài khoản
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="matKhau"
            name="matKhau"
            id="matKhau"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.matKhau}
          />
          {errors.matKhau && touched.matKhau ? (
            <div className="text-red-500">{errors.matKhau}</div>
          ) : (
            ""
          )}
          <label
            for="matKhau"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mật khẩu
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : (
            ""
          )}
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type=""
              name="soDT"
              id="soDT"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.soDT}
            />
            {errors.soDT && touched.soDT ? (
              <div className="text-red-500">{errors.soDT}</div>
            ) : (
              ""
            )}
            <label
              for="soDT"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <select
              name="maNhom"
              id="countries"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.maNhom}
              class=" text-gray-400 text-sm py-2.5   block w-full  border-b-2 border-black transparent peer"
            >
              <option value="" selected>
                Chọn nhóm
              </option>
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP010">GP010</option>
            </select>
            {errors.maNhom && touched.maNhom ? (
              <div className="text-red-500">{errors.maNhom}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full  group">
            <select
              name="maLoaiNguoiDung"
              id="countries"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.maLoaiNguoiDung}
              class=" text-gray-400 text-sm py-2.5   block w-full  border-b-2 border-black transparent peer"
            >
              <option value="" selected>
                Chọn loại người dùng
              </option>
              <option value="GV">Giáo vụ</option>
              <option value="HV">Học viên</option>
            </select>
            {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
              <div className="text-red-500">{errors.maLoaiNguoiDung}</div>
            ) : (
              ""
            )}
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="hoTen"
              id="hoTen"
              class="block py-2.5 px-0 w-full text-sm  bg-transparent  border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black"
              placeholder=" "
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.hoTen}
            />
            {errors.hoTen && touched.hoTen ? (
              <div className="text-red-500">{errors.hoTen}</div>
            ) : (
              ""
            )}
            <label
              for="hoTen"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Họ và tên
            </label>
          </div>
        </div>
        <Button
          htmlType="submit"
          class={`text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
            hover:bg-blue-800
          `}
        >
          Thêm
        </Button>
      </form>
    </>
  );
};

export default FormAddUser;
