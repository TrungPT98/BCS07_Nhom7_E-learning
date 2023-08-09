import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Lottie from "react-lottie";
import animationHome from "../../assets/animation/animationHome.json";
import animationFeedback from "../../assets/animation/animationFeedback.json";
import KhPhoBien from "./KhPhoBien/KhPhoBien";
import KhThamKhao from "./KhThamKhao/KhFullStack";
import KhFullStack from "./KhThamKhao/KhFullStack";
import KhMobile from "./KhThamKhao/KhMobile";
// react countup
import CountUp from "react-countup";
import BackToTop from "../../Components/BackToTop/BackToTop";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./HomePages.scss";
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
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationFeedback,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="homePage">
      <div className="homePageContent">
        {/* slider */}
        <div className="sliderHome flex h-screen">
          <Fade left duration={3000}>
            <div className="sliderHomeLeft w-1/2 ">
              <div className="triangleTopRight"></div>
              <div className="smallBox smallBoxLeftTop"></div>
              <div className="smallBox smallBoxRightTop"></div>
              <div className="smallBox smallBoxRightBottom"></div>
              <div className="smallBox smallBoxRightBottom doubleBox"></div>
              <div className="sliderHomeTitle">
                <h1 className="title">Chào mừng đến với môi trường</h1>
                <h3> Vlearning</h3>
                <button className="btnSliderHome">bắt đầu nào</button>
              </div>
            </div>
          </Fade>
          <Fade right duration={3000}>
            <div className="sliderHomeRight w-1/2 ">
              <Lottie options={defaultOptions} />
            </div>
          </Fade>
        </div>
        {/* info */}
        <div className="info">
          <Slide left duration={2000}>
            <div className="infoContent">
              <div className="infoItem infoItemA">
                <div className="infoItemTitle">
                  <h3>Khóa học</h3>
                  <p>
                    <span>Học qua dự án thực tế</span>, học đi đôi với hành,
                    không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây
                    dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực
                    tế để học viên học xong làm được ngay
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
                      <span>
                        Hình ảnh, ví dụ, bài giảng sinh động trực quan
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Tư duy phân tích, giải quyết vấn đề trong dự án
                      </span>
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
                        Huấn luyện để phát triển năng lực và niềm đam mê lập
                        trình
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
                        Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo
                        mức độ học viên
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
                        Thống kê, so sánh khả năng học của các học viên cùng
                        level để đưa ra mục tiêu học tập
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
                      <span>
                        Chấm điểm tương tác thảo luận giữa các học viên
                      </span>
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
                      <span>
                        Chấm bài và có thể vấn đáp trực tuyến để review
                      </span>
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>
                        Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực
                        tuyến độc đáo
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
          </Slide>
        </div>

        {/* khoá học đề xuất  */}
        <KhPhoBien />
        <KhFullStack />
        <KhMobile />
      </div>

      {/* couting */}
      <div className="couting">
        <div className="coutingContent">
          <div className="coutingItems">
            <div className="coutingItem">
              <div>
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="coutingItemNumber">
                <CountUp start={0} end={9000} duration={5} />
              </h3>
              <p className="coutingItemTitle">Học viên</p>
            </div>
          </div>
          <div className="coutingItems">
            <div className="coutingItem">
              <div>
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="coutingItemNumber">
                {" "}
                <CountUp start={0} end={1000} duration={5} />
              </h3>
              <p className="coutingItemTitle">Khóa học</p>
            </div>
          </div>
          <div className="coutingItems">
            <div className="coutingItem">
              <div>
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="coutingItemNumber">
                {" "}
                <CountUp start={0} end={33200} duration={5} />
              </h3>
              <p className="coutingItemTitle">Giờ học</p>
            </div>
          </div>
          <div className="coutingItems">
            <div className="coutingItem">
              <div>
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="coutingItemNumber">
                {" "}
                <CountUp start={0} end={400} duration={5} />
              </h3>
              <p className="coutingItemTitle">Giảng viên</p>
            </div>
          </div>
        </div>
      </div>

      {/* teacher */}
      <div className="teacher">
        <h3 className="teacherTitle">Giảng viên hàng đầu</h3>
          <Carousel className="mainCarousel">
          <Carousel className="carousel1">
        <div className="teacherContent">
        <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">Big DadMoon</h6>
              <div className="itemRole">
                <p>Chuyên gia lĩnh vực</p>
                <p>lập trình</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">IcarDi MenBor</h6>
              <div className="itemRole">
                <p>Chuyên gia ngôn ngữ </p>
                <p>Vue Js</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">Bladin Slaham</h6>
              <div className="itemRole">
                <p>Chuyên gia hệ thống</p>
                <p>máy tính</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">Chris Andersan</h6>
              <div className="itemRole">
                <p>Chuyên gia lĩnh vực</p>
                <p>Full Skill</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">VueLo Gadi</h6>
              <div className="itemRole">
                <p>Chuyên gia lĩnh vực</p>
                <p>Phân tích</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">David Ngô Savani</h6>
              <div className="itemRole">
                <p>Chuyên gia lĩnh vực</p>
                <p>Front End</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
        </div>
          </Carousel>
          <Carousel className="carousel2">
        <div className="teacherContent">
        <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">Big DadMoon</h6>
              <div className="itemRole">
                <p>Chuyên gia lĩnh vực</p>
                <p>lập trình</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          <div className="teacherItems">
            <div className="teacherItem">
              <img
                className="itemImg"
                src="../../assets/image/imgTeacher/DadMoon.jpg"
                alt="asasdasd"
              />
              <h6 className="itemName">IcarDi MenBor</h6>
              <div className="itemRole">
                <p>Chuyên gia ngôn ngữ </p>
                <p>Vue Js</p>
              </div>
              <div className="itemReview">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.9</span>
              </div>
              <p className="itemCmt">100 Đánh giá</p>
            </div>
          </div>
          
         
        </div>
          </Carousel>
          </Carousel>


      </div>
      {/* feedback */}
      <div className="feedback">
        <div className="feedbackContent">
          <Fade right duration={3000}>
            <div className="smallBox smallBoxRightTop"></div>
            <div className="smallBox smallBoxRightBottom"></div>
            <div className="smallBox smallBoxLeftBottom"></div>
          </Fade>
          <div className="feedbackItem">
            <Fade left duration={3000}>
              <div className="feedbackItemLeft w-1/2">
                <Lottie options={defaultOptions2} />
              </div>
            </Fade>
            <Fade right duration={3000}>
              <div className="feedbackItemRight w-1/2">
                <p className="feedbackText">
                  <i class="fa-solid fa-quote-left mr-2"></i>
                  Chương trình giảng dạy được biên soạn dành riêng cho các bạn
                  Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ
                  cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các
                  thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất
                  hay và hấp dẫn
                </p>
                <p className="feedbackName">Meme Dev</p>
                <p className="feedbackSubTitle"> Học viên xuất sắc</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* backToTop */}
      <BackToTop />
    </div>
  );
};

export default HomePage;
