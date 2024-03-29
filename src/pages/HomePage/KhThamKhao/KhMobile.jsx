import React, { useEffect, useState } from "react";
// fade react-reveal
import Fade from "react-reveal/Fade";
import { Fragment } from "react";
import {NavLink} from 'react-router-dom'
import { khoaHocServ } from "../../../services/khoaHocService";
import { useDispatch } from "react-redux";
import { set_loading_ended, set_loading_started } from "../../../redux/slices/loadingSlice";
// main css
import "./KhThamKhao.scss";
const KhMobile = () => {
  const dispatch = useDispatch()
  const [khoaHoc, setKhoaHoc] = useState([]);
  // gọi api
  useEffect(() => {
    dispatch(set_loading_started)
    khoaHocServ
      .layKhoaHocTheoDanhMuc("DiDong")
      .then((res) => {
        setKhoaHoc(res.data);
        dispatch(set_loading_ended)
      })
      .catch((err) => {
        dispatch(set_loading_ended)
      });
  }, []);
  return (
    <Fragment>
      {/* title */}
      <h3 className="title">Khóa học Mobile</h3>
        <Fade bottom duration={1500}>
          {/* cardThamKhao */}
      <div id="cardThamKhao" className="flex flex-wrap">
        {khoaHoc.slice(0, 4).map((item) => {
          return (
            // card item
              <div key={item.maKhoaHoc} id="cardItemThaoKhao" className="w-1/4">
              <NavLink className='cardItemLink' to={`/detail/${item.maKhoaHoc}`}>
                <img
                // card img
                  className="itemImg"
                  src={item.hinhAnh}
                  alt={item.tenKhoaHoc}
                />
                <span className="imgTag">{item.tenKhoaHoc}</span>
                <div className="cardTKBody">
                  <h6 className=" line-clamp-1">{item.moTa}</h6>
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
                      <img src="https://i.pravatar.cc/150?img=2" alt="Messi" />
                    </div>
                    <span className="avatarTitle">Messi</span>
                  </div>
                  <div className="cardTKFooterRight">
                    <span className="textFooterPrice">400.000Đ</span>
                    <i style={{ color: "red" }} class="fa-solid fa-tag"></i>
                  </div>
                </div>
                <div></div>
              </NavLink>
            </div>
          );
        })}
      </div>
        </Fade>
    </Fragment>
  );
};

export default KhMobile;
