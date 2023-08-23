import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// antd
import { Space, Table, Tag, Button, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nguoiDungServ } from "../../../../services/nguoiDungService";
import { getAllUserThunk } from "../../../../redux/slices/nguoiDungSlice";

// confirm antd
const confirm = (e) => {
  message.success("Click on Yes");
};
const cancel = (e) => {
  message.error("Click on No");
};
const TableUser = () => {
  // message antd
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Xoá thành công",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đã có lỗi xảy ra",
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },

    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text, record, index) => {
        if (text == "GV") {
          return <Tag color="gold">Giảng viên</Tag>;
        } else {
          return <Tag color="cyan">Học viên</Tag>;
        }
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record, index) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => {
              handleDelete(record);
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              className: "bg-blue-600",
            }}
          >
            <NavLink
              key={1}
              className="py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-400 duration-300 hover:text-white"
            >
              Xoá
            </NavLink>
          </Popconfirm>

          <NavLink
            to={`/admin/update/GP02/${record.taiKhoan}`}
            key={2}
            className="py-2 px-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-400 duration-300 hover:text-white"
          >
            Sửa
          </NavLink>
        </Space>
      ),
    },
  ];
  // dispatch
  const dispatch = useDispatch();
  // gọi dữ liệu users
  useEffect(() => {
    nguoiDungServ
      .getAllUser()
      .then((res) => {
        console.log(res);
        dispatch(getAllUserThunk());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // biến chứa dữ liệu user
  const { users } = useSelector((state) => state.nguoiDung);
  // xoá user
  const handleDelete = (record) => {
    nguoiDungServ
      .deleteUser(record.taiKhoan)
      .then((res) => {
        console.log(res);
        success();
        dispatch(getAllUserThunk());
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };

  const newUser = users.map((item, index) => {
    return {
      ...item,
      id: index,
    };
  });
  return (
    <>
      {contextHolder}
      <Table columns={columns} dataSource={newUser} />
    </>
  );
};

export default TableUser;
