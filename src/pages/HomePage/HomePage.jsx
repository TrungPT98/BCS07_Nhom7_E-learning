import React from "react";

import Lottie from "react-lottie";
import animationHome from "../../assets/animation/animationHome.json";
import "./HomePages.scss";
import KhPhoBien from "./KhPhoBien/KhPhoBien";
import KhThamKhao from "./KhThamKhao/KhFullStack";
import KhFullStack from "./KhThamKhao/KhFullStack";
import KhMobile from "./KhThamKhao/KhMobile";

const HomePage = () => {
  // lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationHome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="homePage" className="p-12">

      {/* slider */}
      <div className="sliderHome flex ">
        <div className="sliderHomeLeft w-1/2">
          <div className="sliderHomeTitle">
            <h1 className="title">Chào mừng đến với môi trường</h1>
            <h3> Vlearning</h3>
          </div>
          <div className="btn">
            <button className="btnSliderHome">bắt đầu nào</button>
          </div>
        </div>
        <div className="w-1/2">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      {/* info */}
      <div className="info">
        <div className="infoContent">
          <div className="infoItem infoItemA">
            <div className="infoItemTitle">
              <h3>Khóa học</h3>
              <p>
                <span>Học qua dự án thực tế</span>, học đi đôi với hành, không
                lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ
                các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học
                viên học xong làm được ngay
              </p>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Hơn 1000 bài tập và dự án thực tế</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Công nghệ cập nhật mới nhất</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn
                    trong dự án
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItem infoItemB">
            <div className="infoTitle">
              <h3>LỘ TRÌNH PHÙ HỢP</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Học, luyện tập code, kỹ thuật phân tích, soft skill
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Huấn luyện để phát triển năng lực và niềm đam mê lập trình
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItem infoItemC">
            <div className="infoTitle">
              <h3>HỆ THỐNG HỌC TẬP</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ
                    học viên
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Thống kê, so sánh khả năng học của các học viên cùng level
                    để đưa ra mục tiêu học tập
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItem infoItemD">
            <div className="infoTitle">
              <h3>GIẢNG VIÊN</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Tương tác cùng mentor và giảng viên qua phần thảo luận
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Review code và đưa ra các nhận xét góp ý</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItem infoItemE">
            <div className="infoTitle">
              <h3>CHỨNG NHẬN</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến
                    độc đáo
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>
                    Kết nối CV của bạn đến với các đối tác của V learning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* khoá học phổ biến */}

      <KhPhoBien/>

      <KhFullStack/>
      <KhMobile/>
    </div>
  );
};

export default HomePage;
