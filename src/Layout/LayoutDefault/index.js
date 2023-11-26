import { Outlet } from "react-router-dom";
import Header from "./Header";

function LayoutDefault(){
    return(
        <>
            <Header></Header>
            <div className="main">
                <div className="main__content">
                <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
export default LayoutDefault;