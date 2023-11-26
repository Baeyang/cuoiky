import { useEffect } from "react";
import { getAllUsers } from "../../Services/api";
import ListApartment from "./Components/ListApartment";
import './Home.css';
function Home() {
    // useEffect(()=>{
    //     const fetchapi = async () => {

    //         const response = await getAllUsers();
    //         if(response){
    //             console.log(response)
    //         }
    //     }
    //     fetchapi();
    // },[])

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