import React from "react";
import { NavLink } from "react-router-dom";

// antd
import { Space, Table,Input, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { khoaHocServ } from "../../../../services/khoaHocService";
import { getAllCoures, layDanhSachKhoaHocThunk } from "../../../../redux/slices/couresSlice";
import { Fragment } from "react";
import { useRef } from "react";
import { useState } from "react";

const TableCoures = () => {
   // biến chứa dữ liệu coures
   const { coures } = useSelector((state) => state.coures);
   //   console.log(coures);
  const [newCoures, setNewCoures] = useState([]);

   useEffect(()=>{
    if (Array.isArray(coures)) {
      const updateCoures = coures.map((item,index)=>({
          ...item,
          id: index,
      }))
      setNewCoures(updateCoures)
    }
   },[coures])

  // confirm antd
  const confirm = (e) => {
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    message.error("Click on No");
  };

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

  // dispatch
  const dispatch = useDispatch();

 // gọi dữ liệu khoá học
 useEffect(() => {
  khoaHocServ
    .layDanhSachKhoaHoc()
    .then((res) => {
      // console.log(res);
      dispatch(getAllCoures(res.data));
    })
    .catch((err) => {
      // console.log(err);
    });
}, []);
  // search antd
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
    khoaHocServ
      .layDanhSachKhoaHoc(value)
      .then((res) => {
        console.log(res);
        // console.log(res.data)
        dispatch(getAllCoures(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
 
  //   xoá khoá học
  const handleDelete = (record) => {
    khoaHocServ
      .xoaKhoaHoc(record.maKhoaHoc)
      .then((res) => {
        // console.log(res);
        success();
        dispatch(getAllCoures(res.data));
      })
      .catch((err) => {
          console.log(err.response.data);
        error(err.response.data)
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
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      with: "25%",
      render: (text, record, index) => {
        // console.log(text);
        // console.log(record);
        // console.log(index);
        return (
          <Fragment>
            <img className="" src={text} alt={record.tenKhoaHoc} />;
          </Fragment>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "25%",
      render: (text) => {
        return (
          <Fragment>
            <p
             className="line-clamp-2 ">{text}</p>
          </Fragment>
        );
      },
    },
    {
      title: "Hành động",
      key: "action",
      width: "20%",
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
          to={`/admin/edit/${record.maKhoaHoc}`}
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
      <h3 className="my-3">Quản lý khoá học</h3>
      <Search
        placeholder="Tìm khoá học"
        allowClear
        onSearch={onSearch}
        style={{
          width: "100%",
          marginBottom: "30px",
        }}
      />
      <Table columns={columns} dataSource={newCoures} />
    </>
  );
};

export default TableCoures;
