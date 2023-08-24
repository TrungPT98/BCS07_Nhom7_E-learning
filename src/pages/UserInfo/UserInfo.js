import React from "react";
import "./UserInfo.scss";

const UserInfo = () => {
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

  return (
    <>
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
                <h6>Robert Nguyễn</h6>
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
                              <span class="ml-2">email</span>
                            </p>
                            <p>
                              Họ và tên: <span class="ml-2">hoTen</span>
                            </p>
                            <p>
                              Số điện thoại: <span class="ml-2">soDt</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <p>
                            Tài khoản: <span class="ml-2">taiKhoan</span>
                          </p>
                          <p>
                            Nhóm: <span class="ml-2">maNhom</span>
                          </p>
                          <p>
                            Đối tượng:{" "}
                            <span class="ml-2">
                              {/* {userPersonalInfo.maLoaiNguoiDung === "HV"
                                ? " Học viên"
                                : " Giáo viên"} */}
                              HV
                            </span>
                          </p>
                          <button
                            data-toggle="modal"
                            data-target="#myModal"
                            className="btnGlobal"
                          >
                            Cập nhật
                          </button>
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
                          //   onChange={(e) => {
                          //     setSearchTerm(e.target.value);
                          //   }}
                          className="searchForm"
                          placeholder="Tìm kiếm..."
                        />
                      </form>
                    </div>
                    {/* {RenderUserCourses()} */}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="myModal" style={{ paddingLeft: "0" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header modalUpdateHeader">
                <h5 className="modal-title">Chỉnh sửa thông tin cá nhân</h5>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body modalUpdate">
                <form
                  action="#"
                  // onSubmit={formik.handleSubmit}
                >
                  <h6>Họ và tên</h6>
                  <input
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="text"
                    placeholder="Họ tên"
                    name="hoTen"
                    // value={formik.values.hoTen}
                  />
                  {/* {formik.errors.hoTen && formik.touched.hoTen ? (
                    <div className="errorMessage">{formik.errors.hoTen}</div>
                  ) : (
                    <div className="message"></div>
                  )} */}

                  <h6>Mật khẩu</h6>
                  <input
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="password"
                    placeholder="Mật khẩu"
                    name="matKhau"
                    // value={formik.values.matKhau}
                  />
                  {/* {formik.errors.matKhau && formik.touched.matKhau ? (
                    <div className="errorMessage">{formik.errors.matKhau}</div>
                  ) : (
                    <div className="message"></div>
                  )} */}

                  <h6>Email</h6>
                  <input
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="email"
                    placeholder="Email"
                    name="email"
                    // value={formik.values.email}
                  />
                  {/* {formik.errors.email && formik.touched.email ? (
                    <div className="errorMessage">{formik.errors.email}</div>
                  ) : (
                    <div className="message"></div>
                  )} */}

                  <h6>Số điện thoại</h6>
                  <input
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="phone"
                    placeholder="Số điện thoại"
                    name="soDT"
                    // value={formik.values.soDT}
                  />
                  {/* {formik.errors.soDT && formik.touched.soDT ? (
                    <div className="errorMessage">{formik.errors.soDT}</div>
                  ) : (
                    <div className="message"></div>
                  )} */}

                  {/* <input type="file" /> */}

                  <div class="modal-footer">
                    <button type="submit" className="btnSubmit">
                      Hoàn thành
                    </button>
                    <button
                      type="button"
                      className="btnSubmit btnClose"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
