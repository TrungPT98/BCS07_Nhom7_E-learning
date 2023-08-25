import React, {useState} from "react";
import TableUser from "../../Components/Admin/AdminUser/TableUser/TableUser";

// antd
import { Button, Drawer, Radio, Space } from "antd";
import FormAddUser from "../../Components/Admin/AdminUser/FormAddUser/FormAddUser";
import TableCoures from "../../Components/Admin/AdminCoures/TableCoure/TableCoures";
import FormAddCoures from "../../Components/Admin/AdminCoures/FormAddCoures/FormAddCoures";
const CouresManagment
 = () => {
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
          className="bg-green-600 py-2 px-5 rounded-lg mb-5 text-white"
        >
          Thêm khoá học
        </button>
        <TableCoures/>
        <Drawer
          title="Thêm khoá học"
          placement={placement}
          width={500}
          onClose={onClose}
          open={open}
          size="large"
        >
          <FormAddCoures/>
        </Drawer>
      </div>
    </div>
  );
};

export default CouresManagment
;
