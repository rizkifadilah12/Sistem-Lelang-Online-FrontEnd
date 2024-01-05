import { BrowserRouter, Routes, Route } from "react-router-dom";
//Bac-End Component
import Login from "./admin/components/Login";
import Users from "./admin/pages/users/Users";
import Masyarakat from "./admin/pages/Masyarakats/Masyarakat";
import EditBarang from "./admin/pages/Barang/EditBarang";
import Barang from "./admin/pages/Barang/Barang";
import Dashboard from "./admin/pages/Dashboard";
import AddBarang from "./admin/pages/Barang/AddBarang";
import AddUser from "./admin/pages/users/AddUser";
import EditUser from "./admin/pages/users/EditUser";
import Penawaran from "./admin/pages/penawaran/Penawaran";
import Pemenang from "./admin/pages/Pemenang/Pemenang";
import EditLelang from "./admin/pages/Lelang/EditLelang";
import Lelang from "./admin/pages/Lelang/Lelang"
import AddLelang from "./admin/pages/Lelang/AddLelang";
import Gambar from "./admin/pages/Barang/Gambar";
import EditPass from "./admin/pages/users/ChangePass";
//Front-End Component
import DashboardFront from "./front/pages/home/Dashboard";
import Register from "./front/components/auth/register";
import LoginFront from "./front/components/auth/login"
import Details from "./front/pages/Details/Detail";
import RiwayatPenawaran from "./front/pages/Riwayat/Penawaran";
import Menang from "./front/pages/Riwayat/Menang";
import EditMas from "./front/pages/Details/edit";
import Loadingtes from "./front/pages/home/Loadingtes";
import ChangePass from "./front/pages/Details/ChangePass";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          //Back End Route
          <Route path="/backend" element={<Login />} />
          <Route path="/backend/lelang/add" element={<AddLelang />} />
          <Route path="/backend/lelang/edit/:id" element={<EditLelang />} />
          <Route path="/backend/penawaran" element={<Penawaran />} />
          <Route path="/backend/lelang" element={<Lelang />} />
          <Route path="/backend/pemenang" element={<Pemenang />} />
          <Route path="/backend/dashboard" element={<Dashboard />} />
          <Route path="/backend/users" element={<Users />} />
          <Route path="/backend/users/add" element={<AddUser />} />
          <Route path="/backend/users/edit/:id" element={<EditUser />} />
          <Route path="/backend/barang/edit/:id" element={<EditBarang />} />
          <Route path="/backend/masyarakat" element={<Masyarakat />} />
          <Route path="/backend/barang" element={<Barang />} />
          <Route path="/backend/barang/:id" element={<Gambar />} />
          <Route path="/backend/barang/add" element={<AddBarang />} />
          <Route path="/backend/userpass/:id" element={<EditPass />} />
          //FronEnd Rout
          <Route path="/" element={<DashboardFront/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<LoginFront/>}/>
          <Route path="/edit/:id" element={<EditMas/>}/>
          <Route path="/detail/:id" element={<Details/>}/>
          <Route path="/penawaran" element={<RiwayatPenawaran/>}/>
          <Route path="/menang" element={<Menang/>}/>
          <Route path="/test" element={<Loadingtes/>}/>
          <Route path="/change/:id" element={<ChangePass/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
