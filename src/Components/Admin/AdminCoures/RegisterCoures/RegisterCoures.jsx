import React from "react";

import { message } from "antd";

// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
import { khoaHocServ } from "../../../../services/khoaHocService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import CancelCoures from "../CancelCoures/CancelCoures";

const RegisterCoures = (props) => {
  const dispatch = useDispatch();
  //   trạng thái button
  const [btn, setBtn] = useState(false);

  const { stateBtn } = useSelector((state) => state.coures);
  console.log(stateBtn);
  const { name } = useSelector((state) => state.nguoiDung);
  const { detail, id } = props;
  // message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Ghi danh thành công",
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: "Đã có lỗi xảy ra",
    });
  };
  const formik = useFormik({
    initialValues: {
      maKhoaHoc: id,
      taiKhoan: name.taiKhoan,
    },
    validationSchema: Yup.object().shape({}),
    // addUser
    onSubmit: (values) => {
      console.log(values);

      khoaHocServ
        .dangKyKhoaHoc(values)
        .then((res) => {
          console.log(res);
          success();
          setBtn(true);
        })
        .catch((error) => {
          console.log(error);
          errorMessage();
        });
    },
  });
  const { handleSubmit } = formik;

  //   học viên khoá học
  const [studentCoures, setStudentCoures] = useState([]);

  // gọi api học viên khoá học
  useEffect(() => {
    khoaHocServ
      .hocVienKhoaHoc(id)
      .then((res) => {
        console.log(res);
        setStudentCoures(res.data.lstHocVien);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(studentCoures);

  // kiểm tra xem tài khoản đăng nhập đã đăng ký chưa
  // nếu có thì sẽ disabled button
  useEffect(() => {
    for (let i = 0; i < studentCoures.length; i++) {
      if (studentCoures[i].taiKhoan === name.taiKhoan) {
        setBtn(true);
        break;
      } else {
        setBtn(false);
      }
    }
  }, [studentCoures]);

  return (
    <>
      {contextHolder}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="detailsItemRight w-1/3"
      >
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
            <button
              disabled={btn}
              type="submit"
              className={`btnSidebar w-full rounded-lg p-3 ${
                btn ? "opacity-60" : "hover:opacity-75"
              }`}
            >
              Ghi danh
            </button>

            <CancelCoures couresId={id} />
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterCoures;
