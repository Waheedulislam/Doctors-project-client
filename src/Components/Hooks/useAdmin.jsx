import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res?.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;