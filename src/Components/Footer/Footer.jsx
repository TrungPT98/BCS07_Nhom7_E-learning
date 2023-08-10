import React from "react";
// antd
import { Input, Button, Space } from "antd";
// main css
import "./Footer.scss";
const Footer = () => {
  return (
    <div style={{ background: "#f0f8ff" }} className=" p-3">
      {/* footer */}
      <div className="footer flex justify-between container py-3 px-10 flex-wrap">
        {/* footerItem */}
        <div className="footerItem1  w-30%   p-2 pt-0 ">
          <a
            style={{ textShadow: "5px -2px 3px #54d2c0", color: "#252525" }}
            className="text-3xl font-semibold"
          >
            <span className="text-5xl text-emerald-700">V</span>
            learning
          </a>
          <ul>
            <li className="py-1  ">
              <a href="">
                <i class="fa-solid fa-phone mr-3 w-10 h-10 bg-emerald-700 rounded-full text-center  leading-10 text-white"></i>
                <span>1800-123-4567</span>
              </a>
            </li>
            <li className="py-1   ">
              <a href="">
                <i class="fa-solid fa-envelope-open-text mr-3 w-10 h-10 bg-emerald-700 rounded-full text-center  leading-10 text-white"></i>
                <span>devit@gmail.com</span>
              </a>
            </li>
            <li className=" py-1  ">
              <a href="">
                <i class="fa-solid fa-location-dot mr-3 w-10 h-10 bg-emerald-700 rounded-full text-center  leading-10 text-white"></i>
                <span>Đà Nẵng</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerItem2  w-1/5   p-2">
          <h3 className="text-2xl font-semibold">Liên kết</h3>
          <ul>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Trang chủ</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Dịch vụ</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Nhóm</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerItem3  w-1/5  p-2">
          <h3 className="text-2xl font-semibold">Khóa học</h3>
          <ul>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Front End</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Back End</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Full stack</span>
              </a>
            </li>
            <li className="py-2  ">
              <a>
                <i class="fa-solid fa-chevron-right mr-1"></i>
                <span>Node Js</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerItem4 w-30%     p-2">
          <h3 className="text-2xl font-semibold">Đăng kí tư vấn</h3>
          <Input className="my-1" placeholder="Họ và tên" />
          <Input className="my-1" placeholder="Email" />
          <Input className="my-1" placeholder="Số điện thoại" />
          <Button
            className="bg-yellow-600 mt-2 hover:bg-yellow-400 text-white"
            type=""
          >
            Đăng ký
          </Button>
        </div>
      </div>

      {/* footerBottom */}
      <div className="footerBottom">
        <div className="footerBottomLeft">
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
        <div className="footerBottomRight">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
