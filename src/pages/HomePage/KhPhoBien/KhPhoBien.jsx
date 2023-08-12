import React, { useEffect, useState } from "react";
// fade react-reveal
import Fade from "react-reveal/Fade";
import { khoaHocServ } from "../../../services/khoaHocService";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../../redux/slices/loadingSlice";

// main css
import "./KhPhoBien.scss";
const KhPhoBien = () => {
  const dispatch = useDispatch();
  const [khoaHoc, setKhoaHoc] = useState([]);

  // gọi apu
  useEffect(() => {
    dispatch(set_loading_started());
    khoaHocServ
      .layDanhSachKhoaHoc()
      .then((res) => {
        setKhoaHoc(res.data);
        dispatch(set_loading_ended());
      })
      .catch((err) => {
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <frameElement>
      {/* title */}
      <h3 className="pb-10 cardTitle">Khoá học phổ biến</h3>
        <Fade bottom duration={1500}>

          {/* card */}
      <div id="card" className="flex flex-wrap">
        {khoaHoc.slice(0, 4).map((item) => {
          if (item.luotXem > 80) {
            return (
              // cardItem
                <div key={item.maKhoaHoc} id="cardItem" className="w-1/4 ">
                <NavLink
                  className="cardItemLink"
                  to={`/detail/${item.maKhoaHoc}`}
                >
                  <img className="cardImg" src={item.hinhAnh} alt={item.moTa} />
                  <span className="tagTitle">{item.tenKhoaHoc}</span>
                  <div className="cardBody">
                    <h6 className=" line-clamp-1">{item.moTa}</h6>
                    <div className="cardAvatar">
                      <div className="avatar">
                        <img src="https://i.pravatar.cc/?img=3" alt="Messi" />
                      </div>
                      <span className="avatarTitle">Messi</span>
                    </div>
                  </div>
                  <div className="cardFooter">
                    <div className="cardFooterLeft">
                      <p>400.000Đ</p>
                    </div>
                    <div className="cardFooterRight">
                      <i class="fa-solid fa-star"></i>
                      <span className="textStart">4.8</span>
                    </div>
                  </div>
                  <div></div>
                </NavLink>
              </div>
            );
          }
        })}
      </div>
      </Fade>
    </frameElement>
  );
};

export default KhPhoBien;
