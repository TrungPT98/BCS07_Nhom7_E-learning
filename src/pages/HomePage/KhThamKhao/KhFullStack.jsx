import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./KhThamKhao.scss";
import { khoaHocServ } from "../../../services/khoaHocService";
const KhFullStack = () => {
  const [khoaHoc, setKhoaHoc] = useState([]);
  useEffect(() => {
    khoaHocServ
      .layKhoaHocTheoDanhMuc("FullStack")
      .then((res) => {
        console.log(res);
        setKhoaHoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(khoaHoc);
  return (
    <Fragment>
      <h3 className="title">Khóa học Fullstack</h3>
      <div id="cardThamKhao" className="flex">
        {khoaHoc.slice(0, 4).map((item) => {
          return (
            <div key={item.maKhoaHoc} id="cardItemThaoKhao" className="w-1/4">
              <a href="">
                <img
                  className="itemImg"
                  src={item.hinhAnh}
                  alt={item.tenKhoaHoc}
                />
                <span className="imgTag">{item.tenKhoaHoc}</span>
                <div className="cardTKBody">
                  <h6 className=" line-clamp-2">{item.moTa}</h6>
                  <div className="cardTKDetails">
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
                <div className="cardTKFooter">
                  <div className="cardTKFooterLeft">
                    <div className="avatar">
                      <img src="" alt="Messi" />
                    </div>
                    <span className="avatarTitle">Messi</span>
                  </div>
                  <div className="cardTKFooterRight">
                    <span className="textFooterPrice">400.000Đ</span>
                    <i style={{ color: "red" }} class="fa-solid fa-tag"></i>
                  </div>
                </div>
                <div></div>
              </a>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default KhFullStack;
