import React from "react";
import { useDeleteUserMutation } from "../slices/usersApiSlice";
import {
  LiaEdit,
  LiaTrashAlt,
  LiaCheckSolid,
  LiaTimesCircle,
} from "react-icons/lia";
import { toast } from "react-toastify";

const AdminUserItem = ({ user, refetch }) => {
  const [deleteUser] = useDeleteUserMutation();
  console.log(user);
  const deleteUserHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <tr className="border">
      <td className="pl-1">{user?._id}</td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      {user?.isAdmin ? (
        <td>
          <LiaCheckSolid className="text-green-500" />
        </td>
      ) : (
        <td>
          <LiaTimesCircle className="text-red-500" />
        </td>
      )}
      <td>
        <LiaEdit
          className="text-black text-xl hover:cursor-pointer"
          onClick={() => {}}
        />
        {/* <div className="m-auto">
          <ProductModal
            product={product}
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
            isCreate={false}
            refetch={refetch}
          />
        </div> */}
      </td>
      <td>
        <LiaTrashAlt
          className="text-red-500 text-xl hover:cursor-pointer"
          onClick={() => deleteUserHandler(user._id)}
        />
      </td>
    </tr>
  );
};

export default AdminUserItem;
