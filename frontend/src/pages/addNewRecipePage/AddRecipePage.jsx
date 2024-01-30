import AddRecipeForm from "../../components/addRecipe/AddRecipeForm";
import ConnectionVerification from "../../components/modal/ConnectionVerification";
import { useUserContext } from "../../context/userContext";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AddRecipePage() {
  const { userData } = useUserContext();

  return (
    <>
      <Header />
      <Sidebar />
      <div>{!userData ? <ConnectionVerification /> : <AddRecipeForm />}</div>
    </>
  );
}
