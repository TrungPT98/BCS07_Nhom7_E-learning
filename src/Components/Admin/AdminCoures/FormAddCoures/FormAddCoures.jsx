import React, { useState } from "react";

// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  message
} from "antd";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { GROUP_ID, khoaHocServ } from "../../../../services/khoaHocService";

const FormAddCoures = () => {
  // message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thêm thành công",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đã có lỗi xảy ra",
    });
  };

  // infoUser
  const { name } = useSelector((state) => state.nguoiDung);
  // console.log(name);

  // state img
  const [imgSrc, setImgSrc] = useState(null);

  // tạo số ngẫu nhiên từ 0 tới 100
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 101);
  };

  // useFormik
  // Xử lý form
  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: generateRandomNumber(),
      danhGia: generateRandomNumber(),
      hinhAnh: {},
      maNhom: GROUP_ID,
      ngayTao: moment(),
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: name.taiKhoan,
    },
    validationSchema: Yup.object().shape({
      maKhoaHoc: Yup.string().required("Mã khoá học không được để trống"),
      biDanh: Yup.string().required("Bí danh không được để trống"),
      tenKhoaHoc: Yup.string().required("Tên khoá học không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      maDanhMucKhoaHoc: Yup.string().required('Danh mục  không được để trống'),
      ngayTao:Yup.date().required('Ngày tạo không đẻ trống')
      
    }),
    // addUser
    onSubmit: (values) => {
      // console.log(values);
      // tạo formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      khoaHocServ
        .themKhoahoc(formData)
        .then((res) => {
          console.log(res);
          success()
          resetForm()
        })
        .catch((err) => {
          console.log(err);
          error()
        });
    },
  });

  // moment date
  const handleChangeDatePicker = (value) => {
    // dùng moment để chuyển qua định dạng moment
    // dùng format lại dd/mm/yyyy
    console.log("value", moment(value).format("DD/MM/YYYY"));
    // dùng setFieldValue để input nhận dữ liệu
    setFieldValue("ngayTao", moment(value).format("DD/MM/YYYY"));
  };

  // image
  const handleChangeFile = (e) => {
    // lấy file từ e
    let file = e.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpeg"
    ) {
      // tạo đối tượng đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      // lưu formik
    } else {
      setImgSrc(null);
      setFieldValue("hinhAnh", null);
    }
    setFieldValue("hinhAnh", file);
  };

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
      <Form.Item className="ms-4" label="Mã khoá">
        <Input name="maKhoaHoc" className="" onChange={handleChange} onBlur={handleBlur} value={values.maKhoaHoc} />
        {errors.maKhoaHoc && touched.maKhoaHoc ? (
          <p className="text-red-500">{errors.maKhoaHoc}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Bí danh">
        <Input name="biDanh" className="" onChange={handleChange} onBlur={handleBlur} value={values.biDanh} />
        {errors.biDanh && touched.biDanh ? (
          <p className="text-red-500">{errors.biDanh}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Tên khoá">
        <Input name="tenKhoaHoc" className="" onChange={handleChange} onBlur={handleBlur} value={values.tenKhoaHoc}/>
        {errors.tenKhoaHoc && touched.tenKhoaHoc ? (
          <p className="text-red-500">{errors.tenKhoaHoc}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Mô tả">
        <Input.TextArea
          name="moTa"
          className=" resize-none"
          onChange={handleChange}
          onBlur={handleBlur} value={values.moTa}
        />
         {errors.moTa && touched.moTa ? (
          <p className="text-red-500">{errors.moTa}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Ngày tạo">
        <DatePicker
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
          name="ngayTao"
          className=""
          onBlur={handleBlur}
        />
         {errors.ngayTao && touched.ngayTao ? (
          <p className="text-red-500">{errors.ngayTao}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Danh mục">
        <Select
          onChange={(values) => {
            setFieldValue("maDanhMucKhoaHoc", values);
          }}
          className=""
          name="maDanhMucKhoaHoc"
          placeholder="Chọn khóa học"
          onBlur={handleBlur} value={values.maDanhMucKhoaHoc}
        >
          <Select.Option value="BackEnd">Lập trình Backend</Select.Option>
          <Select.Option value="FrontEnd">Lập trình Front end</Select.Option>
          <Select.Option value="FullStack">Lập trình Full Stack</Select.Option>
          <Select.Option value="Design">Thiết kế Web</Select.Option>
          <Select.Option value="DiDong">Lập trình di động</Select.Option>
          <Select.Option value="TuDuy">Tư duy lập trình</Select.Option>
        </Select>
        {errors.maDanhMucKhoaHoc && touched.maDanhMucKhoaHoc ? (
          <p className="text-red-500">{errors.maDanhMucKhoaHoc}</p>
        ) : ''}
      </Form.Item>
      <Form.Item className="ms-4" label="Hình ảnh">
        <Input
          name="hinhAnh"
          type="file"
          className="p-0 "
          onChange={handleChangeFile}
          onBlur={handleBlur}
        />
        {errors.hinhAnh && touched.hinhAnh ? (
          <p className="text-red-500">{errors.hinhAnh}</p>
        ) : ''}
        <img
          accept="image/png, image/gif, image/jpeg"
          className="w-20 h-20 mt-3 "
          src={imgSrc}
          alt="..."
        />
      </Form.Item>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4  flex justify-center items-center hover:bg-blue-400 rounded-lg"
      >
        Thêm
      </button>
    </Form>
    </>
  );
};

export default FormAddCoures;
