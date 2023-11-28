import { useEffect } from "react";
import { getAllUsers } from "../../Services/api";
import ListApartment from "./Components/ListApartment";
import './Home.css';
function Home() {
    return (
        <>
            <div className="section">
            </div>
            <div className="ListApartment">
                <div className="container">
                    <ListApartment></ListApartment>
                </div>
            </div>
        </>
    )
}
export default Home;