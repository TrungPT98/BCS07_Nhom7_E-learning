import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import DsKhoaHocPhanTrang from "../../Components/DsKhoaHocPhanTrang/DsKhoaHocPhanTrang";
import "./KhoaHoc.scss";
const KhoaHoc = () => {
  return (
    <Fragment>
      {/* titleCoures */}
      <div className="titleCourse">
        <Zoom>
          <h3>Khóa học</h3>
        </Zoom>
        <Zoom>
          <p>Bắt đầu hành trình nào!!!</p>
        </Zoom>
      </div>

      {/* courses */}
      <div className="coures">
        <div className="couresContent">
          <div style={{ background: "#264653" }} className="couresItems">
            <div className="couresItem">
              <h6>CHƯƠNG TRÌNH </h6>
              <i class="fa-solid fa-computer"></i>
              <p>300</p>
            </div>
          </div>
          <div style={{ background: "#2a9d8f" }} className="couresItems">
            <div className="couresItem">
              <h6>NHÀ SÁNG TẠO</h6>
              <i class="fa-solid fa-camera"></i>
              <p>10000</p>
            </div>
          </div>
          <div style={{ background: "#e9c46a" }} className="couresItems">
            <div className="couresItem">
              <h6>NHÀ THIẾT KẾ</h6>
              <i class="fa-solid fa-briefcase"></i>
              <p>400</p>
            </div>
          </div>
          <div style={{ background: "#f4a261" }} className="couresItems">
            <div className="couresItem">
              <h6>BÀI GIẢNG</h6>
              <i class="fa-solid fa-book"></i>
              <p>3000</p>
            </div>
          </div>
          <div style={{ background: "#ee8959" }} className="couresItems">
            <div className="couresItem">
              <h6>VIDEO</h6>
              <i class="fa-solid fa-circle-play"></i>
              <p>40000</p>
            </div>
          </div>
          <div style={{ background: "#e76f51" }} className="couresItems">
            <div className="couresItem">
              <h6>LĨNH VỰC</h6>
              <i class="fa-solid fa-dice-d20"></i>
              <p>200</p>
            </div>
          </div>
        </div>

        <DsKhoaHocPhanTrang />
      </div>
    </Fragment>
  );
};

export default KhoaHoc;
