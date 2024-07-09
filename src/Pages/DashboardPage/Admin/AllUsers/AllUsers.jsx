import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import userPhoto from "../../../../assets/image/user-profile-icon-free-vector.jpg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    // get user
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })

    // Make admin
    const handleMakeAdmin = async (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            toast.success('Successfully Make admin')
                        }
                    })

            }
        });

    }


    const handleDeleteUser = async (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then((res => {
                        if (res?.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }))

            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly lg:gap-96  my-4">
                <h1 className="text-3xl ">All Users </h1>
                <h1 className="text-3xl lg:ml-48 ">Total  Users : {users.length}</h1>
            </div>
            <div className="overflow-x-auto ">
                <table className="table lg:w-full">
                    {/* head */}
                    <thead >
                        <tr  >
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>

                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user?.photoURL || `${userPhoto}`}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn  btn-lg bg-orange-500">
                                                <FaUsers className="text-white text-xl " />
                                            </button>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-lg bg-red-500">
                                            <RiDeleteBinLine className="text-white text-xl" />
                                        </button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;