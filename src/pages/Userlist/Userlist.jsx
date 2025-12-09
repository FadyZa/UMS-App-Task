import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { userContext } from "../../context/UserProvider";

function Userlist() {
  const [users, setUsers] = useState([]);
  const { user: currUser } = useContext(userContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        console.log(res.data.users);
        setUsers(res.data.users);
      } catch {
        toast.error("Something Went Wrong!");
        return;
      }
    };
    getUsers();
  }, []);

  async function deleteUser(id) {
    try {
      const res = await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      return res;
    } catch (error) {
      return error;
    }
  }

  function confrimationAlert(user) {
    Swal.fire({
      title: `Are you sure you want to delete ${user.username}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FEAF00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(user.id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="section-head">
        <h2 className="section-title mb-0">Users List</h2>
        {currUser?.role === "admin" && (
          <Link to="/userdata" className="main-btn text-decoration-none">
            Add New User
          </Link>
        )}
      </div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user?.image}
                  alt="user img"
                  className="img-fluid rounded"
                  width="50px"
                />
              </td>
              <td>
                {user?.id === currUser?.id ? (
                  <span className="badge bg-warning me-1">My Profile</span>
                ) : (
                  ""
                )}
                {user?.username}
              </td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.birthDate}</td>
              <td>
                <div className="d-flex gap-3">
                  {currUser?.role === "admin" && (
                    <>
                      <Link
                        to={`edit/${user?.id}`}
                        className="text-decoration-none"
                      >
                        <i className="fas fa-edit edit-user"></i>
                      </Link>
                      <i
                        className="fas fa-trash delete-user"
                        onClick={() => confrimationAlert(user)}
                      ></i>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;
