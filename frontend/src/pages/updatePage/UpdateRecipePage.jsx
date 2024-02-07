import { useUserContext } from "../../context/userContext";
import UpdateRecipe from "../../components/updateRecipeComponent/UpdateRecipe";
import Error from "../../components/errorComponent/Error";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

export default function UpdateRecipePage() {
  const { userData } = useUserContext();

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        {userData === null || userData === "null" ? (
          <Error />
        ) : (
          <UpdateRecipe />
        )}
      </div>
      <Navbar />
    </>
  );
}
