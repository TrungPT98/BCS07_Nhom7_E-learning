import React, {useState} from "react";
import TableUser from "../../Components/Admin/AdminUser/TableUser/TableUser";

// antd
import { Button, Drawer, Radio, Space } from "antd";
import FormAddUser from "../../Components/Admin/AdminUser/FormAddUser/FormAddUser";
import { NavLink } from "react-router-dom";
const Usermanagment = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <div>
        <button
          onClick={showDrawer}
          className="bg-green-600 py-2 px-5 rounded-lg  text-white hover:opacity-80 transition-all duration-300"
        >
          Thêm mới
        </button>
        <NavLink
        to="/"
          className="ms-4 bg-blue-600 py-2 px-5 rounded-lg  text-white hover:opacity-80 transition-all duration-300"
        >
          Quay về trang chủ
        </NavLink>
        <TableUser />
        <Drawer
          title="Thêm người dùng"
          placement={placement}
          width={500}
          onClose={onClose}
          open={open}
          size="large"
        >
          <FormAddUser/>
        </Drawer>
      </div>
    </div>
  );
};

export default Usermanagment;
