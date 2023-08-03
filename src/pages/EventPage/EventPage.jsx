import React from "react";
import './event.scss';

const EventPage = () => {
  return  (
    <section>
    <div className="sliderEvent">
      <div className="timeEvents">
        <div className="countDownEvent">
          <section className="events">
            <p className="dayEvent">00</p>
            <p><small>Ngày</small></p>
          </section>
          <section className="events">
            <p className="hoursEvent">00</p>
            <p><small>giờ</small></p>
          </section>
          <section className="events ">
            <p className="minEvent">00</p>
            <p><small>phút</small></p>
          </section>
          <section className="events ">
            <p className="secondEvent">00</p>
            <p><small>giây</small></p>
          </section>
        </div>
        <h4>Sự kiện công nghệ lớn nhất 2021</h4>
        <h6>20 - 25 tháng 12, 2022, Việt Nam</h6>
      </div>
    </div>
    <div className="eventDetail">
      <div className="row">
        <div className="col-md-6 imgEvent"><img className="animate" src="/assets/images/media/it.ef68b551.png" alt="" /></div>
        <div className="col-md-6 infoEvent">
          <h5>Sự kiện công nghệ dành cho startup</h5>
          <h6>Nơi gặp gỡ của những tư tưởng lớn</h6>
          <p className="colorCardTitle">Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
          <button className="btnGlobal mr-4 btnJohn">Tham gia</button><button className="btnGlobal btnLearn">Tìm hiểu thêm</button>
        </div>
      </div>
    </div>
    <div className="speecher mt-4">
      <h6>Các nhà đồng sáng tạo</h6>
      <div className="row speechDetail">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor5.2e4bd1e6.jpg" alt="" />
            <h6>Nguyễn Nhật</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor6.64041dca.jpg" alt="" />
            <h6>Nguyễn Nhật Nam</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor7.edd00a03.jpg" alt="" />
            <h6>Nguyễn Nam</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor8.aec2f526.jpg" alt="" />
            <h6>Jhonny Đặng</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor9.504ea6c5.jpg" alt="" />
            <h6>Ngô Henry</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor10.89946c43.jpg" alt="" />
            <h6>Vương Phạm Vn</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor11.0387fe65.jpg" alt="" />
            <h6>Rober Imacu</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="cardSpeecher">
            <img src="/assets/images/media/instrutor12.90a80820.jpg" alt="" />
            <h6>Khoa Pug</h6>
            <p>Ceo TechViet Production</p>
          </div>
        </div>
      </div>
    </div>
    <div className="donors">
      <h6>Nhà tài trợ chương trình</h6>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="itemDonors">
            <img src="/assets/images/media/meta.10fa2fa1.jpg" alt="" />
            <p>Facebook</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="itemDonors">
            <img src="/assets/images/media/microsoft.318b3280.jpg" alt="" />
            <p>Microsoft</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="itemDonors">
            <img src="/assets/images/media/Google-logo.f11902b5.jpg" alt="" />
            <p>Google</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="itemDonors">
            <img src="/assets/images/media/amazon.996890c4.jpg" alt="" />
            <p>Amazon</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default EventPage;
