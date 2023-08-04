import React, { useEffect, useState } from "react";
import { khoaHocServ } from "../../../services/khoaHocService";
import "./KhPhoBien.scss";
const KhPhoBien = () => {
  const [khoaHoc, setKhoaHoc] = useState([]);
  useEffect(() => {
    khoaHocServ
      .layDanhSachKhoaHoc()
      .then((res) => {
        // console.log(res);
        setKhoaHoc(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  // console.log(khoaHoc);

  return (
    <frameElement>
      <h3 className="pb-10 cardTitle">Khoá học phổ biến</h3>
      <div id="card" className="flex">
        {khoaHoc.slice(0, 4).map((item) => {
         if(item.luotXem > 80){
            return (
                <div key={item.maKhoaHoc} id="cardItem" className="w-1/4">
                  <a href="">
                    <img className="cardImg" src={item.hinhAnh} alt={item.moTa} />
                    <span className="tagTitle">{item.tenKhoaHoc}</span>
                    <div className="cardBody">
                      <h6
                      className=" line-clamp-2"
                      >{item.moTa}</h6>
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
                  </a>
                </div>
              );
         }
        })}
      </div>
    </frameElement>
  );
};

export default KhPhoBien;
 