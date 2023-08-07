import React, { useEffect, useState } from "react";
import "./KhDanhMuc.scss";
import { NavLink, useParams } from "react-router-dom";
import { khoaHocServ } from "../../services/khoaHocService";
const KhDanhMuc = () => {
  const { id } = useParams();
  const [khoaHocDm, setKhoaHocDm] = useState([]);

  useEffect(() => {
    khoaHocServ
      .layKhoaHocTheoDanhMuc(id)
      .then((res) => {
        // console.log(res)
        setKhoaHocDm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(khoaHocDm);
  return (
    <>
      <div className="titleCourse">
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>

      <div className="listCourses">
        <div className="coursesText">
          <button>
            <i class="fa-solid fa-desktop"></i>
            <span>{khoaHocDm[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
          </button>
        </div>
        <div className="coursesContent">
          <div className="coursesItems flex">
            {khoaHocDm.map((item) => {
              return (
                <div key={item.maKhoaHoc} className="coursesItem w-1/4">
                  <NavLink
                    to={`/detail/${item.maKhoaHoc}`}
                    className="coursesLink"
                  >
                    <img
                      className="coursesImg"
                      src={item.hinhAnh}
                      alt="zxczxczxc"
                    />
                    <span className="tagTitle line-clamp-1" >{item.tenKhoaHoc}</span>
                    <div className="coursesBody">
                      <h6 className="line-clamp-1">{item.moTa}</h6>
                      <div className="coursesDetails">
                        <span>
                          <i
                            style={{ color: "#f5c002" }}
                            class="fa-solid fa-clock"
                          ></i>
                          8 giờ
                        </span>
                        <span>
                          <i
                            style={{ color: "#f06f68" }}
                            class="fa-solid fa-calendar-days"
                          ></i>
                          4 tuần
                        </span>
                        <span>
                          <i
                            style={{ color: "#65c9ff" }}
                            class="fa-solid fa-chart-simple"
                          ></i>
                          Tất cả
                        </span>
                      </div>
                    </div>

                    <div className="coursesFooter">
                      <div className="coursesFooterLeft">
                        <div className="avatar">
                          <img src="https://i.pravatar.cc/?img=5" alt="Messi" />
                        </div>
                        <span className="avatarTitle">Messi</span>
                      </div>
                      <div className="coursesFooterRight">
                        <span className="coursesFooterPrice">400.000Đ</span>
                        <i style={{ color: "red" }} class="fa-solid fa-tag"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default KhDanhMuc;
