import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import LoginDesktopComponent from "../../components/login/LoginDesktopComponent";

function Login() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <Navbar />
      <LoginDesktopComponent />
    </div>
  );
}

export default Login;
