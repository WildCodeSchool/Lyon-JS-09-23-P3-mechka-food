import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Comment from "../../components/comment/Comment";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CommentPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <Comment />
      <Navbar />
    </>
  );
}
