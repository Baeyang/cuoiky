import './App.css';
import Home from './Features/Home';
import Login from './Features/Login';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from './Features/Register';
import LayoutDefault from './Layout/LayoutDefault';
import PrivateRoute from './PrivateRoute';
import SellApartment from './Features/SellApartment';
import DetailApartment from './Features/DetailApartment';
import Rating from './Features/Rating';
import HomeAdmin from './Features/HomeAdmin';
import LayoutAdmin from './Layout/LayoutAdmin';
import ManageUser from './Features/ManageUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutDefault></LayoutDefault>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='/DetailApartment/:id' element={<DetailApartment />}></Route>
            <Route element={<PrivateRoute accessRole={['ADMIN','CUSTOMER']}></PrivateRoute >}>
              <Route path='/SellingApartment' element={<SellApartment />}></Route>
              <Route path='/Rating' element={<Rating />}></Route>
            </Route>

          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>

          <Route element={<PrivateRoute accessRole={['ADMIN']}></PrivateRoute>}>
            <Route element={<LayoutAdmin></LayoutAdmin>}>
              <Route path='Admin' element={<HomeAdmin />}></Route>
              <Route path='ManageUser' element={<ManageUser></ManageUser>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
