import React, { useEffect, useState } from "react";

// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
import { DatePicker, Form, Input, Radio, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { GROUP_ID, khoaHocServ } from "../../../../services/khoaHocService";
import { useNavigate, useParams } from "react-router-dom";
import {
  getInfoCoures,
  getUpdateCoures,
} from "../../../../redux/slices/couresSlice";
import { updateCoures } from "../../../../redux/actions/couresAction";

const EditCoures = () => {
  // useParams
  const { maKhoaHoc } = useParams();
  //   console.log(maKhoaHoc);
  //   useDispatch
  const dispatch = useDispatch();
  // useNavigate
  const navigate = useNavigate()
  // state img
  const [imgSrc, setImgSrc] = useState("");
  // message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Cập nhật thành công",
    });
  };
  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };
  //   lấy infoCoures
  useEffect(() => {
    khoaHocServ
      .layThongTinKhoaHoc(maKhoaHoc)
      .then((res) => {
        console.log(res.data);
        dispatch(getInfoCoures(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // infoUser
  const { name } = useSelector((state) => state.nguoiDung);
  //   console.log(name);
  const { userAddCoures } = useSelector((state) => state.nguoiDung);
  console.log(userAddCoures);

  //   infoCoures
  const { infoCoures } = useSelector((state) => state.coures);
  //   console.log(infoCoures);

  // moment date
  const handleChangeDatePicker = (value) => {
    // dùng moment để chuyển qua định dạng moment
    // dùng format lại dd/mm/yyyy
    // console.log("value", moment(value).format("DD/MM/YYYY"));
    // dùng setFieldValue để input nhận dữ liệu
    let ngayTao = moment(value);
    setFieldValue("ngayTao", ngayTao);
  };

  // image
  const handleChangeFile = async (e) => {
    // lấy file từ e
    if (e.target.files[0]) {
      // lưu formik
      await setFieldValue("hinhAnh", e.target.files[0]);
      // tạo đối tượng đọc file
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setFieldValue("hinhAnh", null);
      setImgSrc("");
    }
  };

  // useFormik
  // Xử lý form
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: infoCoures?.maKhoaHoc,
      biDanh: infoCoures?.biDanh,
      tenKhoaHoc: infoCoures?.tenKhoaHoc,
      moTa: infoCoures?.moTa,
      danhGia: infoCoures?.danhGia || 0,
      luotXem: infoCoures?.luotXem || 0,
      hinhAnh: null,
      maNhom: GROUP_ID,
      ngayTao: infoCoures?.ngayTao,
      tenDanhMucKhoaHoc: infoCoures?.danhMucKhoaHoc?.tenDanhMucKhoaHoc,
      taiKhoanNguoiTao: name.taiKhoan,
    },
    validationSchema: Yup.object().shape({
      //   maKhoaHoc: Yup.string().required("Mã khoá học không được để trống"),
      biDanh: Yup.string().required("Bí danh không được để trống"),
      tenKhoaHoc: Yup.string().required("Tên khoá học không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      //   maDanhMucKhoaHoc: Yup.string().required("Danh mục  không được để trống"),
      // ngayTao:Yup.required('Ngày tạo không đẻ trống')
    }),
    // addUser
    onSubmit: (values) => {
      console.log(values);
      values.maNhom = GROUP_ID;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      //   console.log(formData)

        khoaHocServ
        .chinhSuaKhoaHoc(formData)
        .then((res) => {
          console.log(res);
          success();
          navigate('http://localhost:3000/admin/coures')
          dispatch(getUpdateCoures(res.data));
        })
        .catch((err) => {
          console.log(err);
          error(err.response.data);
        });
    },
  });

  // boc tách
  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
    setFieldValue,
  } = formik;

  const [componentSize, setComponentSize] = useState("small");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      {contextHolder}
      <Form
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item className="ms-4" label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item className="ms-4" label="Tên khoá">
          <Input
            name="tenKhoaHoc"
            className=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tenKhoaHoc}
          />
          {errors.tenKhoaHoc && touched.tenKhoaHoc ? (
            <p className="text-red-500">{errors.tenKhoaHoc}</p>
          ) : (
            ""
          )}
        </Form.Item>
        <Form.Item className="ms-4" label="Mô tả">
          <Input.TextArea
            name="moTa"
            className=" resize-none"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.moTa}
          />
          {errors.moTa && touched.moTa ? (
            <p className="text-red-500">{errors.moTa}</p>
          ) : (
            ""
          )}
        </Form.Item>
        <Form.Item className="ms-4" label="Ngày tạo">
          <DatePicker
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
            // name="ngayTao"
            className=""
            // onBlur={handleBlur}
            value={moment(values.ngayTao, "DD/MM/YYYY")}
          />
          {/* {errors.ngayTao && touched.ngayTao ? (
          <p className="text-red-500">{errors.ngayTao}</p>
        ) : ''} */}
        </Form.Item>
        <Form.Item className="ms-4" label="Danh mục">
          <Select
            onChange={(values) => {
              setFieldValue("tenDanhMucKhoaHoc", values);
            }}
            className=""
            name="tenDanhMucKhoaHoc"
            placeholder="Chọn khóa học"
            onBlur={handleBlur}
            defaultValue={values.tenDanhMucKhoaHoc}
          >
            <Select.Option value="BackEnd">Lập trình Backend</Select.Option>
            <Select.Option value="FrontEnd">Lập trình Front end</Select.Option>
            <Select.Option value="FullStack">
              Lập trình Full Stack
            </Select.Option>
            <Select.Option value="Design">Thiết kế Web</Select.Option>
            <Select.Option value="DiDong">Lập trình di động</Select.Option>
            <Select.Option value="TuDuy">Tư duy lập trình</Select.Option>
          </Select>
          {/* {errors.tenDanhMucKhoaHoc && touched.tenDanhMucKhoaHoc ? (
            <p className="text-red-500">{errors.tenDanhMucKhoaHoc}</p>
          ) : (
            ""
          )} */}
        </Form.Item>
        <Form.Item className="ms-4" label="Hình ảnh">
          <Input
            name="hinhAnh"
            type="file"
            className="p-0 "
            onChange={handleChangeFile}
            // onBlur={handleBlur}
          />
          {/* {errors.hinhAnh && touched.hinhAnh ? (
            <p className="text-red-500">{errors.hinhAnh}</p>
          ) : (
            ""
          )} */}
          <img
            accept="image/png, image/jpg, image/jpeg"
            className="w-20 h-20 mt-3 "
            src={imgSrc === "" ? infoCoures.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4  flex justify-center items-center hover:bg-blue-400 rounded-lg"
        >
          Cập nhật
        </button>
      </Form>
    </>
  );
};

export default EditCoures;
