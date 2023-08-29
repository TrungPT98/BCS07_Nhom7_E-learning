import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { layDuLieuLocal, luuXuongLocal } from "../../util/localStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getInfoUserAction,
  updateInfoUserAction,
  userCancelCourse,
} from "../../redux/actions/QuanLyUser";
import "./UserInfo.scss";
import { nguoiDungServ } from "../../services/nguoiDungService";
import { khoaHocServ } from "../../services/khoaHocService";

const UserInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  // const userInfo = layDuLieuLocal("user");
  // console.log(userInfo);

  // const { taiKhoan } = userInfo;
  const { taiKhoan } = useParams();

  // console.log(taiKhoan);
  const dispatch = useDispatch();
  useEffect(() => {
    if (taiKhoan) {
      dispatch(getInfoUserAction(taiKhoan));
    }
  }, []);
  const { infoUser } = useSelector((state) => state.nguoiDung);
  console.log(infoUser);

  // Formik form
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: infoUser.taiKhoan,
      matKhau: infoUser.matKhau,
      hoTen: infoUser?.hoTen,
      email: infoUser?.email,
      soDT: infoUser.soDT,
      maLoaiNguoiDung: infoUser?.maLoaiNguoiDung,
      maNhom: infoUser.maNhom,
    },
    validationSchema: Yup.object().shape({
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
      console.log(values);

      dispatch(updateInfoUserAction(values));
      messageApi.success("Cập nhật thành công, vui lòng đăng nhập lại");
      localStorage.removeItem("user");

      // Sau khi Cập nhật thì sẽ reload lại trang để có thông tin mới
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
  });

  //   bóc tách
  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    formik;
  // console.log(formik);

  // Xử lý giao diện Tab
  const openTab = (e, id) => {
    if (!e.target.classList.contains("active")) {
      document.querySelector(".tabLink.active").classList.remove("active");
      document.querySelectorAll(".tabContent").forEach((tabItem, index) => {
        tabItem.classList.remove("active");
      });
      e.target.classList.add("active");
      document.querySelector(`#${id}`).classList.add("active");
    }
  };

  // Xử lý giao diện Modal
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // RenderCourser
  const RenderUserCourses = () => {
    if (infoUser.chiTietKhoaHocGhiDanh) {
      return infoUser.chiTietKhoaHocGhiDanh
        .filter((courses) => {
          if (searchTerm.trim() === "") {
            return courses;
          } else if (
            courses.tenKhoaHoc
              .trim()
              .toLocaleLowerCase()
              .includes(searchTerm.trim().toLocaleLowerCase())
          ) {
            return courses;
          }
        })
        .map((course, index) => {
          return (
            <div key={index} className="myCourseItem">
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <img
                    className="imgNet"
                    src={course.hinhAnh}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "http://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png";
                    }}
                    alt=""
                  />
                </div>
                <div className="col-xl-7 col-lg-6 cardNetContent">
                  <h6>{course.tenKhoaHoc}</h6>
                  <p className="colorCardTitle">
                    ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với
                    nhiều quy tắc và cách sử dụng khác nhau...
                  </p>
                  <div class="iconNetCard">
                    <span class="textCardTitle">
                      <i className="far fa-clock iconOclock"></i> 8 giờ
                    </span>
                    <span class="textCardTitle">
                      <i className="far fa-calendar iconCalendar"></i> 23 giờ
                    </span>
                    <span class="textCardTitle">
                      <i className="fas fa-signal iconLevel "></i> All level
                    </span>
                  </div>
                  <p className="iconStarNet">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                  <div className="">
                    <img
                      className="imgNetFooter"
                      src="../../assets/image/imgTeacher/VueLo.jpg"
                      alt=""
                    />
                    <span className="ml-2">Nguyễn Nam</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 cancelNet">
                  <button
                    onClick={() => {
                      const action = userCancelCourse(course.maKhoaHoc);
                      dispatch(action);
                      setTimeout(() => {
                        window.location.reload();
                    
                      }, 1000);
                    }}
                    className="btnGlobal"
                  >
                    Hủy khóa học
                  </button>
                </div>
              </div>
            </div>
          );
        });
    } else {
      return "";
    }
  };

  return (
    <>
      {contextHolder}
      <section className="infoPage">
        <div className="titleCourse">
          <h3>Thông tin cá nhân</h3>
          <p>Thông tin học viên</p>
        </div>
        <div className="infoPageContent">
          <div className="row ">
            <div className="col-lg-3 col-md-4">
              <div className="infoLeft">
                <img
                  //   src={credentials.hinhAnh}
                  src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600";
                  }}
                  alt=""
                />
                <h6>{infoUser.hoTen}</h6>
                <p>Lập trình viên Front-end</p>
                <button className="btnInfo">Hồ sơ cá nhân</button>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="infoRight">
                {/* <!-- Tab links --> */}
                <div class="tab">
                  <button
                    class="tabLink active"
                    onClick={(e) => openTab(e, "infoPersonal")}
                  >
                    Thông tin cá nhân
                  </button>

                  <button
                    class="tabLink"
                    onClick={(e) => openTab(e, "infoCourse")}
                  >
                    Khóa học
                  </button>
                </div>

                {/* <!-- Tab content --> */}
                <div id="infoPersonal" class="tabContent active">
                  {/* Tab active */}
                  {/* UserInfo */}
                  <section className="userInfo">
                    <div className="userInfoTop">
                      <div className="row">
                        <div className="col-md-7">
                          <div>
                            <p>
                              Email:
                              <span class="ml-2">{infoUser.email}</span>
                            </p>
                            <p>
                              Họ và tên:{" "}
                              <span class="ml-2">{infoUser.hoTen}</span>
                            </p>
                            <p>
                              Số điện thoại:{" "}
                              <span class="ml-2">{infoUser.soDT}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <p>
                            Tài khoản:{" "}
                            <span class="ml-2">{infoUser.taiKhoan}</span>
                          </p>
                          <p>
                            Nhóm: <span class="ml-2">{infoUser.maNhom}</span>
                          </p>
                          <p>
                            Đối tượng:{" "}
                            <span class="ml-2">
                              {infoUser.maLoaiNguoiDung === "HV"
                                ? " Học viên"
                                : " Giáo viên"}
                            </span>
                          </p>
                          <Button
                            data-toggle="modal"
                            data-target="#myModal"
                            className="btnGlobal"
                            type="primary"
                            onClick={showModal}
                          >
                            Cập nhật
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="userInfoBot">
                      <h4>Kĩ năng của tôi</h4>
                      <div className="row">
                        <div className="skillAll col-xl-8 col-lg-6">
                          <div className="mySkill skillBtnHtml">
                            <button className="skillBtnCustom">html</button>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="mySkill skillBtnCss ">
                            <button className="skillBtnCustom skillBtnHtml">
                              css
                            </button>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="mySkill skillBtnJs">
                            <button className="skillBtnCustom ">js</button>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "50%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="mySkill skillBtnReact">
                            <button className="skillBtnCustom skillBtnHtml">
                              react
                            </button>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                          <div className="timeStudy">
                            <div className="timeStudyItem">
                              <i className="fas fa-user-clock mr-2"></i>
                              <div>
                                <h6>Giờ học</h6>
                                <p>80</p>
                              </div>
                            </div>
                            <div className="timeStudyItem">
                              <i className="fas fa-layer-group mr-2"></i>
                              <div>
                                <h6>Điểm tổng</h6>
                                <p>80</p>
                              </div>
                            </div>
                            <div className="timeStudyItem">
                              <i className="fas fa-swatchbook mr-2"></i>
                              <div>
                                <h6>Buổi học</h6>
                                <p>40</p>
                              </div>
                            </div>
                            <div className="timeStudyItem">
                              <i className="fas fa-signal mr-2"></i>
                              <div>
                                <h6>Cấp độ</h6>
                                <p>Trung cấp</p>
                              </div>
                            </div>
                            <div className="timeStudyItem">
                              <i className="fas fa-graduation-cap mr-2"></i>
                              <div>
                                <h6>Học lực</h6>
                                <p>Khá</p>
                              </div>
                            </div>
                            <div className="timeStudyItem">
                              <i className="fas fa-book mr-2"></i>
                              <div>
                                <h6>Bài tập</h6>
                                <p>100</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div id="infoCourse" class="tabContent">
                  {/*CourseInfo  */}
                  <section className="myCourseInfo">
                    <div className="findCourseNet">
                      <h6>Khóa học của tôi</h6>
                      <form action="">
                        <input
                          type="text"
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                          }}
                          className="searchForm"
                          placeholder="Tìm kiếm..."
                        />
                      </form>
                    </div>
                    {RenderUserCourses()}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <Modal
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
          ]}
        >
          <h3 className="pb-3 mb-1 text-center border-b-2">
            Chỉnh sửa thông tin cá nhân
          </h3>
          <form action="#" onSubmitCapture={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Họ tên
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
                type="text"
                placeholder="Họ tên"
                name="hoTen"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              />
              {errors.hoTen && touched.hoTen ? (
                <div className="errorMessage">{errors.hoTen}</div>
              ) : (
                <div className="message"></div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mật khẩu
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
                value={values.matKhau}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              />
              {errors.matKhau && touched.matKhau ? (
                <div className="errorMessage">{errors.matKhau}</div>
              ) : (
                <div className="message"></div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              />
              {errors.email && touched.email ? (
                <div className="errorMessage">{errors.email}</div>
              ) : (
                <div className="message"></div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Số điện thoại
              </label>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="phone"
                placeholder="Số điện thoại"
                name="soDT"
                value={values.soDT}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              />
              {errors.soDT && touched.soDT ? (
                <div className="errorMessage">{errors.soDT}</div>
              ) : (
                <div className="message"></div>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente hover:bg-blue-800"
            >
              Cập nhật
            </button>
          </form>
        </Modal>
      </section>
    </>
  );
};

export default UserInfo;
