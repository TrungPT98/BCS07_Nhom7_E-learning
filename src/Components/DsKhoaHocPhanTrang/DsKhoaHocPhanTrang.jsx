import React, { useEffect, useState } from "react";
import { khoaHocServ } from "../../services/khoaHocService";
import { Pagination } from "antd";
import { NavLink } from "react-router-dom";
import Lottie from "react-lottie";
import animationLoading from "../../assets/animation/animationLoading.json";
import Fade from 'react-reveal/Fade';
import "./DsKhoaHocPhanTrang.scss";
const DsKhoaHocPhanTrang = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [khoaHoc, setKhoaHoc] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    khoaHocServ
      .layDanhSachKhoaHocPhanTrang(currentPage)
      .then((res) => {
        // console.log(res.data.items);
        setKhoaHoc(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, [currentPage]);
  //   console.log(khoaHoc)

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="mt-10">
      <h3 className="title">
        <i class="fa-solid fa-bookmark"></i>
        Danh sách khóa học
      </h3>
        <Fade bottom duration={1500}>
      <div className="cardPhanTrang">
        {loading ? (
          <Lottie options={defaultOptions} width={200} />
        ) : (
          khoaHoc.map((item) => {
            return (
                <div key={item.maKhoaHoc} className="cardItem w-1/4">
                <NavLink
                  className="cardItemLink"
                  to={`/detail/${item.maKhoaHoc}`}
                >
                  <img
                    className="cardImg"
                    src={item.hinhAnh}
                    alt={item.tenKhoaHoc}
                  />
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
          })
          )}
      </div>
          </Fade>
      <Pagination
        className="text-center"
        current={currentPage}
        onChange={handleChangePage}
        defaultCurrent={1}
        total={50}
      />
    </div>
  );
};

export default DsKhoaHocPhanTrang;
