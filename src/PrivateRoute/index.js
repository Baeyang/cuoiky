import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function PrivateRoute({accessRole}){
    const token = localStorage.getItem('access_token');
    if(!token){
        return <Navigate to ='login'></Navigate>
    } else {
    const decoded = jwtDecode(token);
    const role = decoded?.role[0]?.authority
    const access = accessRole?.find(item => item === role)
    console.log(decoded)
    console.log(role)
    console.log(accessRole)
    console.log(access)
    if(access&& token){
    return(
        <>
        <Outlet></Outlet>
        </>
    )
    } else {
        return(
            <Navigate to ='login'/>
        )
    }}
}
export default PrivateRoute;
