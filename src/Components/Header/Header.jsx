import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// antd
import { Dropdown, Space, Input } from "antd";
import { khoaHocServ } from "../../services/khoaHocService";
// main css
import "./Header.scss";
// ant design
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [danhMuc, setDanhMuc] = useState([]);
  // lấy dữ liệu danh mục
  useEffect(() => {
    khoaHocServ
      .layDanhMucKhocHoc()
      .then((res) => {
        setDanhMuc(res.data);
      })
      .catch((err) => {
      });
  }, []);


  // add class sticky
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // lấy api khoaHocDanhMuc
  const items = danhMuc.map((item) => ({
    label: (
      <NavLink to={`/danhMuc/${item.maDanhMuc}`} rel="">
        {item.tenDanhMuc}
      </NavLink>
    ),
    key: item.maDanhMuc,
  }));
  return (
    // header
    <header id="header" className="pt-3 m-0">
      <nav className=" border-gray-200 px-4 md:px-6 py-2 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* logo */}
          <NavLink to={"http://localhost:3000/"} className="flex items-center">
            <img
              src="./assets/image/headerLogo.png"
              className="mr-3 h-6 md:h-9"
              alt="dadad"
            />
          </NavLink>
          {/* input */}
          <Input className="w-1/4 inputHeader" placeholder="Tìm kiếm" />
          <div className="flex items-center md:order-2">
            {/* button đăng nhập */}
            <NavLink className="btnLogin text-white font-medium rounded-md text-md px-4 md:px-5 py-2 md:py-2.5 mr-2 ">
              Đăng nhập
            </NavLink>

            {/* buttom open Menu mobile */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-md text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* menu mobile */}
          <div
            className={`navListContent justify-between items-center w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            } `}
            id="mobile-menu-2"
          >
            <ul className="navList flex flex-col font-medium md:flex-row md:space-x-8 md:mt-0 items-center ">
              <li>
                {/*  */}
                <NavLink
                  className="navlinkItem block    rounded    md:p-0 "
                  to="/khoahoc"
                  aria-current="page"
                >
                  Khoá học
                </NavLink>
              </li>
              <li>
                <NavLink to='/blogs' className="navlinkItem text-black block   md:hover:bg-transparent md:p-0      ">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinkItem text-black block      md:p-0    ">
                  Sự kiện
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinkItem text-black block     hover:bg-gray-50 ">
                  Thông tin
                </NavLink>
              </li>
              <li>
                <div>
                  {/* khoá học danh mục */}
                  <Dropdown
                    className="buttonDropdown "
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Danh mục
                        <i class="fa-solid fa-chevron-down"></i>
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
