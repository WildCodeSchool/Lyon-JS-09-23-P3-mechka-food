import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SearchContainer from "../../components/search/SearchContainer";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Search() {
  return (
    <>
      <Header />
      <Sidebar />
      <SearchContainer />
      <Navbar />
    </>
  );
}
