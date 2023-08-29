import React, { useEffect } from "react";
import "./CancelCoures.scss";
import { useState } from "react";

import { message } from "antd";

// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { khoaHocServ } from "../../../../services/khoaHocService";
import { setStateBtn } from "../../../../redux/slices/couresSlice";

const CancelCoures = (props) => {
    const dispatch = useDispatch()
  const [studentCoures, setStudentCoures] = useState([]);
  const { name } = useSelector((state) => state.nguoiDung);
  const { couresId } = props;
//   console.log(couresId);
    const {stateBtn} = useSelector((state)=>state.coures)
    console.log(stateBtn)
// message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Ghi danh thành công",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đã có lỗi xảy ra",
    });
  };
  // lấy thông tin hoc viên khoá học
  useEffect(() => {
    khoaHocServ
      .hocVienKhoaHoc(couresId)
      .then((res) => {
        console.log(res);
        setStudentCoures(res.data.lstHocVien);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // trạng thái btn
  const [btn, setBtn] = useState(true);
  useEffect(() => {
    for (let i = 0; i < studentCoures.length; i++) {
      if (studentCoures[i].taiKhoan === name.taiKhoan) {
        setBtn(false);
        break;
      } else {
        setBtn(true);
      }
    }
  }, [studentCoures]);
  const formik = useFormik({
    initialValues: {
      maKhoaHoc: couresId,
      taiKhoan: name.taiKhoan,
    },
    validationSchema: Yup.object().shape({}),
    // addUser
    onSubmit: (values) => {
      console.log(values);
      khoaHocServ
        .huyGhiDanhKhoaHoc(values)
        .then((res) => {
          console.log(res);
          success();
          setBtn(true)
        })
        .catch((err) => {
          error();
          console.log(err);
        });
    },
  });
  const { handleSubmit } = formik;
  //   const handleFormSubmit = (e) => {
  //     e.preventDefault(); // Ngăn chặn hành vi mặc định của form
  //     handleSubmit(e); // Gọi hàm xử lý submit từ formik
  //   };
  return (
    <>
      {contextHolder}

      <button
        disabled={btn}
        onClick={handleSubmit}
        className={`btnCancel w-full rounded-lg p-3 bg-red ${
          btn ? "opacity-60" : "hover:opacity-75"
        }`}
      >
        {" "}
        Huỷ ghi danh
      </button>
    </>
  );
};

export default CancelCoures;
