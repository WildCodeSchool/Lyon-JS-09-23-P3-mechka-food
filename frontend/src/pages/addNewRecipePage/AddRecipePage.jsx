import AddRecipeForm from "../../components/addRecipe/AddRecipeForm";
import { useUserContext } from "../../context/userContext";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Error from "../../components/errorComponent/Error";

export default function AddRecipePage() {
  const { userData } = useUserContext();

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        {userData === "null" || userData === null ? (
          <Error />
        ) : (
          <AddRecipeForm />
        )}
      </div>
    </>
  );
}
