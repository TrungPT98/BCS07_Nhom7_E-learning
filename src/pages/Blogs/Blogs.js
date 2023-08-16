import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import "./Blog.scss";
const Blogs = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  return (
    <Fragment>
      {/* titleCoures */}
      <div className="titleBlogs">
        <Zoom>
          <h3>BLOG</h3>
        </Zoom>
        <Zoom>
          <p>THÔNG TIN CÔNG NGHỆ SỐ!!!</p>
        </Zoom>
      </div>

      {/* blogsContent */}
      <div className="blogsContainer">
        <h3>Bài viết nổi bật</h3>
        <p className="subTitle">
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
          và các kỹ thuật lập trình web.
        </p>

        <div className="blogsContent ">
          <div className="blogsContentLeft w-2/3">
            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev ngáo</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>Cách chỉnh theme Oh-my-posh cho Powershell</h4>
                <p>
                  Hello ae mọi người nhé, mọi người (đặc biệt là lập trình viên
                  Software) chắc hẳn đã nghe tới Powershell, nhưng bù lại cái
                  màn hình...
                </p>
                <div className="itemBodyBottom">
                  <p>Terminal</p>
                  <span>11 ngày trước</span>
                  <span>2 phút đọc</span>
                </div>
              </div>
            </div>

            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev Quèn</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>Sự khác biệt giữa var, let và const trong JavaScript</h4>
                <p>
                Tôi muốn thảo luận chi tiết về các từ khóa var,...
                </p>
                <div className="itemBodyBottom">
                  <p>Javascript</p>
                  <span>một tháng trước</span>
                  <span>3 phút đọc</span>
                </div>
              </div>
            </div>

            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev gà</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>`Tất tần tật` về cải thiện Performance của 1 trang web🚀</h4>
                <p>
                  Hello ae mọi người nhé, mọi người (đặc biệt là lập trình viên
                  Software) chắc hẳn đã nghe tới Powershell, nhưng bù lại cái
                  màn hình...
                </p>
                <div className="itemBodyBottom">
                  <p>Javascript</p>
                  <span>4 tháng trước</span>
                  <span>2 phút đọc</span>
                </div>
              </div>
            </div>


            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev đần</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>Một số "cẩm nang" hay khi làm việc với HTML/CSS😂 </h4>
                <p>
                Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn...
                </p>
                <div className="itemBodyBottom">
                  <p>Front-end</p>
                  <span>11 tháng trước</span>
                  <span>5 phút đọc</span>
                </div>
              </div>
            </div>

            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev ngốc</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>"Kết nối trước" với preconnect, prefetch để làm gì?</h4>
                <p>
                Ở đây chắc hẳn ai cũng từng dùng google fonts để nhúng fonts vào...
                </p>
                <div className="itemBodyBottom">
                  <p>Front-end</p>
                  <span>10 ngày trước</span>
                  <span>5 phút đọc</span>
                </div>
              </div>
            </div>

            <div className="blogsLeftItem">
              <div className="itemTop">
                <div className="itemTopleft">
                  <img src={`https://i.pravatar.cc/150?img=${randomNumber}`} alt="avatar" />
                  <span>Dev giỏi</span>
                </div>

                <div className="itemTopRight">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="itemBody">
                <h4>Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới</h4>
                <p>
                Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...
                </p>
                <div className="itemBodyBottom">
                  <p>ReactJS</p>
                  <span>8 ngày trước</span>
                  <span>6 phút đọc</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blogsContentRight w-1/3">
              <div className="blogsTopics">
                <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
                <ul>
                  <li>Front-end / Mobile apps</li>
                  <li>Back-end / Devops</li>
                  <li>UI / UX / Design</li>
                  <li>Others</li>
                </ul>
              </div>

            <div className="contentRightImg">
            <div className="contentRightImg1">
                    <img src="./assets/image/imgBlogs/image1.jpg" alt="asdas" />
                
              </div>

              <div className="contentRightImg2">
                    <img src="./assets/image/imgBlogs/image2.jpg" alt="asdas" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blogs;
