import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { khoaHocServ } from "../../services/khoaHocService";
import { NavLink } from "react-router-dom";
import { Button, Space } from "antd";
import KhPhoBien from "../../pages/HomePage/KhPhoBien/KhPhoBien";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlice";
import Zoom from "react-reveal/Zoom";
import "./KhDetail.scss";
const KhDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    dispatch(set_loading_started);
    khoaHocServ
      .layThongTinKhoaHoc(id)
      .then((res) => {
        // console.log(res);
        setDetail(res.data);
        dispatch(set_loading_ended);
      })
      .catch((err) => {
        // console.log(err);
        dispatch(set_loading_ended);
      });
  }, []);
  // console.log(detail)
  return (
    <>
      <div className="titleCourse">
        <Zoom>
          <h3>THÔNG TIN KHÓA HỌC</h3>
        </Zoom>
        <Zoom>
          <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
        </Zoom>
      </div>
      <div className="details">
        <div className="detailsContent">
          <div className="detailsItemLeft  w-2/3">
            <h4 className="title">{detail?.tenKhoaHoc}</h4>
            <div className="itemLeftInfo">
              <div className="w-1/3">
                <div className="infoItemLeft">
                  <p className="subTitle">Giảng viên</p>
                  <p className="title">Messi</p>
                </div>
              </div>
              <div className="w-1/3">
                <div className="infoItemCenter">
                  <p className="subTitle">Danh mục</p>
                  <p className="title">
                    {detail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                  </p>
                </div>
              </div>
              <div className="w-1/3">
                <div className="infoItemRight">
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>5
                  </span>
                  <p className="subTitle">Đánh giá</p>
                </div>
              </div>
            </div>

            <p className="itemLeftText">
              Hỗ trợ các bạn bước đầu vào ngành lập trình một cách đơn giản và
              dễ hiểu nhất.chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả
              các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng
              giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả
              lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập
              cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ
              qua
            </p>

            <div className="itemLeftLearn">
              <h3>Những lợi ích đạt được</h3>
              <div className="itemLearnList">
                <div className="w-1/2 learnListLeft">
                  <ul>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tạo ra ứng dụng và sản phẩm kỹ thuật số, biến ý tưởng
                        thành hiện thực và thể hiện sáng tạo
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tăng cơ hội việc làm trong lĩnh vực công nghệ thông tin
                        và phát triển phần mềm.
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Rèn luyện khả năng giải quyết vấn đề và tư duy logic.
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Đem lại niềm vui và sự sáng tạo trong quá trình tạo ra
                        sản phẩm hoặc giải quyết bài toán.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="w-1/2 learnListRight">
                  <ul>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tự động hóa công việc, giúp tiết kiệm thời gian và giảm
                        sai sót.
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tăng thu nhập nhờ vào các kỹ năng lập trình giá trị cao.
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Hiểu rõ công nghệ thông tin và cuộc sống hiện đại.
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tiếp cận nguồn thông tin phong phú và tiếp tục học hỏi
                        suốt đời.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="itemLeftContent">
              <h3>Nội dụng khoá học</h3>
              <div className="leftContentDetails">
                <div className="contentTitle">
                  <span>MỤC 1: GIỚI THIỆU</span>
                  <button>Xem trước</button>
                </div>

                <p>Bài học</p>

                <div className="contentLesson">
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Bạn sẽ làm được gì sau khóa học?
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Làm quen với Dev tools
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Cài đặt VS Code
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Lưu ý khi học lập trình
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="itemLeftContent">
              <div className="leftContentDetails">
                <div className="contentTitle">
                  <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
                  <button>Xem trước</button>
                </div>

                <p>Bài học</p>

                <div className="contentLesson">
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Trang chủ và thành phần thư mục
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Hướng dẫn khóa học + Liên kết Github
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      Trang chủ thương mại điện tử + thiết lập SASS
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      SPA/MPA là gì?
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="itemLeftContent">
              <div className="leftContentDetails">
                <div className="contentTitle">
                  <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
                  <button>Xem trước</button>
                </div>

                <p>Bài học</p>

                <div className="contentLesson">
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      constructor
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      componentDidMount
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      componentWillUnmount
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                  <div className="itemLesson">
                    <span>
                      <i class="fa-regular fa-circle-play"></i>
                      ComponentDidUpdate
                    </span>
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      14:35
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detailsItemRight w-1/3">
            <div className="itemRightSidebar">
              <img
                className="sidebarImg"
                src={detail?.hinhAnh}
                alt={detail?.moTa}
              />
              <div className="sidebarPrice">
                <i class="fa-solid fa-heart"></i>
                <span className="priceTitle">500.000</span>
                <span className="priceSubTitle">đ</span>
              </div>
              <div className="sidebarContent">
                <ul>
                  <li>
                    <p>
                      Ghi danh:
                      <span>10 học viên</span>
                    </p>
                    <i class="fa-solid fa-graduation-cap"></i>
                  </li>
                  <li>
                    <p>
                      Thời gian:
                      <span>18 giờ</span>
                    </p>
                    <i class="fa-solid fa-clock"></i>
                  </li>
                  <li>
                    <p>
                      Bài học:
                      <span>10</span>
                    </p>
                    <i class="fa-solid fa-book"></i>
                  </li>
                  <li>
                    <p>
                      Video:
                      <span>14</span>
                    </p>
                    <i class="fa-solid fa-film"></i>
                  </li>
                  <li>
                    <p>
                      Trình độ:
                      <span>Người mới bắt đầu</span>
                    </p>
                    <i class="fa-solid fa-layer-group"></i>
                  </li>
                </ul>
                <Button className="btnSidebar w-full">Đăng ký</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <KhPhoBien />
        </div>
      </div>
    </>
  );
};

export default KhDetail;
