import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminPage from "../../components/adminPage/AdminPage";

function AdminPagePrincipal() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <AdminPage />
      <Navbar />
    </div>
  );
}

export default AdminPagePrincipal;
