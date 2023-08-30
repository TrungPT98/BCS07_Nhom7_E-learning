import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// antd
import { Space, Table, Tag, message, Popconfirm, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nguoiDungServ } from "../../../../services/nguoiDungService";
import {
  getAllUser,
  getAllUserThunk,
} from "../../../../redux/slices/nguoiDungSlice";
import { GROUP_ID } from "../../../../services/khoaHocService";

// confirm antd
const confirm = (e) => {
  message.success("Click on Yes");
};
const cancel = (e) => {
  message.error("Click on No");
};
const TableUser = () => {
  // biến chứa dữ liệu user
  const { users } = useSelector((state) => state.nguoiDung);
  const [newUser, setNewUser] = useState([]);
  // console.log(users)
  const dispatch = useDispatch();
// message antd
const [messageApi, contextHolder] = message.useMessage();
const success = () => {
  messageApi.open({
    type: "success",
    content: "Xoá thành công",
  });
};
const error = (data) => {
  messageApi.open({
    type: "error",
    content: data,
  });
};
  useEffect(() => {
    const updateUser = users.map((item, index) => ({
      ...item,
      id: index,
    }));
    setNewUser(updateUser);
  }, [users]);
  //  console.log(newUser)
  // dispatch
  // gọi dữ liệu users
  useEffect(() => {
    nguoiDungServ
      .getAllUser()
      .then((res) => {
        console.log(res);
        dispatch(getAllUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // xoá user
  const handleDelete = (record) => {
    nguoiDungServ
      .deleteUser(record.taiKhoan)
      .then((res) => {
        console.log(res);
        success();
        dispatch(getAllUser(res.data));
      })
      .catch((err) => {
        console.log(err.response.data);
  error(err.response.data)
      });
  };

  

  // search antd
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
    nguoiDungServ
      .getAllUser(value)
      .then((res) => {
        console.log(res);
        // console.log(res.data)
        dispatch(getAllUser(res.data));
      })
      .catch((err) => {
        console.log(err);
        
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
            to={`/admin/update/${GROUP_ID}/${record.taiKhoan}`}
            key={2}
            className="py-2 px-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-400 duration-300 hover:text-white"
          >
            Sửa
          </NavLink>
        </Space>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <h3 className="my-4">Quản lý người dùng</h3>
      <Search
        placeholder="Tìm người dùng"
        allowClear
        onSearch={onSearch}
        style={{
          width: "100%",
          marginBottom: "30px",
        }}
      />
      <Table columns={columns} dataSource={newUser} />
    </>
  );
};

export default TableUser;
