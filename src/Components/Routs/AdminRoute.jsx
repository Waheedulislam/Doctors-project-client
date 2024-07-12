/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import useAdmin from "../Hooks/useAdmin";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div><LoadingSpinner></LoadingSpinner></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />
};

export default AdminRoute;