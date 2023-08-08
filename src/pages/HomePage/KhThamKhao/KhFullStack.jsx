import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Fragment } from "react";
import "./KhThamKhao.scss";
import {NavLink} from 'react-router-dom'
import { khoaHocServ } from "../../../services/khoaHocService";
import { useDispatch } from "react-redux";
import { set_loading_ended, set_loading_started } from "../../../redux/slices/loadingSlice";
const KhFullStack = () => {
  const dispatch = useDispatch()
  const [khoaHoc, setKhoaHoc] = useState([]);
  useEffect(() => {
    dispatch(set_loading_started())
    khoaHocServ
      .layKhoaHocTheoDanhMuc("FullStack")
      .then((res) => {
        // console.log(res);
        setKhoaHoc(res.data);
        dispatch(set_loading_ended)
      })
      .catch((err) => {
        // console.log(err);
        dispatch(set_loading_ended)
      });
  }, []);
  // console.log(khoaHoc);
  return (
    <Fragment>
      <h3 className="title">Khóa học Fullstack</h3>
      <div id="cardThamKhao" className="flex">
        {khoaHoc.slice(0, 4).map((item) => {
          return (
           <Fade bottom duration={1500}>
             <div key={item.maKhoaHoc} id="cardItemThaoKhao" className="w-1/4">
              <NavLink className='cardItemLink' to={`/detail/${item.maKhoaHoc}`}>
                <img
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
                      <img src="https://i.pravatar.cc/300" alt="Messi" />
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
           </Fade>
          );
        })}
      </div>
    </Fragment>
  );
};

export default KhFullStack;
