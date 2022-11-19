import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthPrvider";
import useAdmin from "../useHooks/useAdmin";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [isAdminLoading] = useAdmin(user?.email);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const makeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Admin created!");
        } else {
          toast.error("Your not admin!");
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl mb-8">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                {/* {console.log(user)} */}
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
