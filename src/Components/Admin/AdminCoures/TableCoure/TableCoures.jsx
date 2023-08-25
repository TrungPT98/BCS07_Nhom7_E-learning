import React from "react";
import { NavLink } from "react-router-dom";

// antd
import { Space, Table, Tag, Button, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { khoaHocServ } from "../../../../services/khoaHocService";
import { layDanhSachKhoaHocThunk } from "../../../../redux/slices/couresSlice";
import { Fragment } from "react";

const TableCoures = () => {
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
        dispatch(layDanhSachKhoaHocThunk());
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  // biến chứa dữ liệu coures
  const { coures } = useSelector((state) => state.coures);
  //   console.log(coures);

  //   xoá khoá học
  const handleDelete = (record) => {
    khoaHocServ
      .xoaKhoaHoc(record.maKhoaHoc)
      .then((res) => {
        // console.log(res);
        success();
        dispatch(layDanhSachKhoaHocThunk());
      })
      .catch((err) => {
          console.log(err.response.data);
        if(err.response.data === 'Khóa học đã ghi danh học viên không thể xóa!'){
                return error('Khóa học đã ghi danh học viên không thể xóa!')
        }else{
            return error('Có lỗi xảy ra')
        }
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
  const newCoures = coures.map((item, index) => {
    return {
      ...item,
      id: index,
    };
  });
  return (
    <>
      {contextHolder}
      <Table columns={columns} dataSource={newCoures} />
    </>
  );
};

export default TableCoures;
