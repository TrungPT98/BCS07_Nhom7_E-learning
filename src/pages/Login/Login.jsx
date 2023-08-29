import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { http } from '../../Util/setting'
// import { handleSignup, userLogin, userSignup } from '../../Redux/action/UserAction'
// import { useHistory } from "react-router";
import "./Login.scss";
// import { LOADING_GLOBAL_HIDE, LOADING_GLOBAL_SHOW } from '../../Redux/types/isLoadingTypes'
// import antdesign
import { message } from "antd";
import { nguoiDungServ } from "../../services/nguoiDungService";
import { luuXuongLocal } from "../../util/localStore";
import { useNavigate } from "react-router-dom";
import { getInfoUser, setName } from "../../redux/slices/nguoiDungSlice";

export default function Login() {
  const dispatch = useDispatch();
  //   const history = useHistory();

  // Xử lý giao diện
  const [classContainer, setClassContainer] = useState("container");
  const addID = () => {
    setClassContainer("container right-panel-active");
  };
  const delID = () => {
    setClassContainer("container");
  };

  // Xử lý đăng ký
  const formikSignup = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maNhom: "GP01",
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
    onSubmit: (values) => {
      nguoiDungServ
        .dangKy(values)
        .then((res) => {
          console.log(res);
          messageApi.success("Đăng ký thành công.");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          messageApi.error(err.response.data);
        });
    },
  });

  // useNavigate
  const navigate = useNavigate();

  // message from ant design
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // values là dữ liệu từ input
    onSubmit: (values) => {
      //   console.log(vdalues);

      // gửi dữ liệu lên server
      nguoiDungServ
        .dangNhap(values)
        .then((res) => {
          console.log(res);
          if (res.data.maLoaiNguoiDung === "GV") {
            messageApi.success("Đăng nhập thành công.");
            // login thành công, lưu thông tin xuống local
            luuXuongLocal("user", res.data);
            // lưu thành công sẽ gửi dữ liệu lên redux
            dispatch(setName(res.data));
            //   set thời gian để thông báo message
            setTimeout(() => {
              navigate("/admin/user");
            }, 2000);
          } else {
            messageApi.success("Đăng nhập thành công.");
            // login thành công, lưu thông tin xuống local
            luuXuongLocal("user", res.data);
            // lưu thành công sẽ gửi dữ liệu lên redux
            dispatch(setName(res.data));

            //   set thời gian để thông báo message
            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
          messageApi.error(err.message);
          // clear input khi nhập sai tk hoặc mk
          formik.resetForm();
        });
    },
    // dùng thư viện yup để validate
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required(
        "Vui lòng cung cấp thông tin bắt buộc trước khi tiếp tục."
      ),
      matKhau: Yup.string().required(
        "Vui lòng cung cấp thông tin bắt buộc trước khi tiếp tục."
      ),
    }),
  });
  const { handleSubmit, handleChange, errors, touched, handleBlur } = formik;

  //   bóc tách

  return (
    <>
      {contextHolder}
      <div className="loginBody container-fluid">
        <div className={classContainer} id="container">
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={formikSignup.handleSubmit}>
              <h2 className="pt-3">ĐĂNG KÝ</h2>
              <input
                onBlur={formikSignup.handleBlur}
                onChange={formikSignup.handleChange}
                type="text"
                placeholder="Tài khoản"
                name="taiKhoan"
                value={formikSignup.values.taiKhoan}
              />
              {formikSignup.errors.taiKhoan && formikSignup.touched.taiKhoan ? (
                <div className="errorMessage">
                  {formikSignup.errors.taiKhoan}
                </div>
              ) : (
                <div className="message"></div>
              )}

              <input
                onChange={formikSignup.handleChange}
                type="text"
                placeholder="Họ tên"
                name="hoTen"
                value={formikSignup.values.hoTen}
              />
              {formikSignup.errors.hoTen && formikSignup.touched.hoTen ? (
                <div className="errorMessage">{formikSignup.errors.hoTen}</div>
              ) : (
                <div className="message"></div>
              )}

              <input
                onChange={formikSignup.handleChange}
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
                value={formikSignup.values.matKhau}
              />
              {formikSignup.errors.matKhau && formikSignup.touched.matKhau ? (
                <div className="errorMessage">
                  {formikSignup.errors.matKhau}
                </div>
              ) : (
                <div className="message"></div>
              )}

              <input
                onChange={formikSignup.handleChange}
                type="email"
                placeholder="Email"
                name="email"
                value={formikSignup.values.email}
              />
              {formikSignup.errors.email && formikSignup.touched.email ? (
                <div className="errorMessage">{formikSignup.errors.email}</div>
              ) : (
                <div className="message"></div>
              )}

              <input
                onChange={formikSignup.handleChange}
                type="phone"
                placeholder="Số điện thoại"
                name="soDT"
                value={formikSignup.values.soDT}
              />
              {formikSignup.errors.soDT && formikSignup.touched.soDT ? (
                <div className="errorMessage">{formikSignup.errors.soDT}</div>
              ) : (
                <div className="message"></div>
              )}

              <select
                id=""
                className=""
                onChange={formikSignup.handleChange}
                name="maNhom"
                value={formikSignup.values.maNhom}
              >
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
              <button type="submit">Đăng ký</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form
              className="formLoginUser"
              action="#"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <h1>Đăng nhập</h1>

              <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                placeholder="Tài khoản"
                name="taiKhoan"
                value={formik.values.taiKhoan}
              />
              {/* check khi người dùng nhập vô rồi mới báo lỗi (dùng touched) nếu không dùng sẽ báo lỗi khi chúng ta không đụng vào input */}
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-red-700 m-0 text-left mb-2">
                  {errors.taiKhoan}
                </p>
              ) : (
                ""
              )}

              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
                value={formik.values.matKhau}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-red-700 m-0 text-left mb-2">
                  {errors.taiKhoan}
                </p>
              ) : (
                ""
              )}
              <a href="#">Quên mật khẩu?</a>
              <button type="submit">Đăng nhập</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Chào mừng bạn đã trở lại!</h1>
                <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                <button onClick={delID} className="ghost" id="signIn">
                  Đăng nhập
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Xin chào!</h1>
                <p>
                  Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của
                  bạn!
                </p>
                <button onClick={addID} className="ghost" id="signUp">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
