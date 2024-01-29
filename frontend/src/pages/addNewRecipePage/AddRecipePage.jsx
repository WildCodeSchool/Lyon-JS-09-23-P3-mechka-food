import AddRecipeForm from "../../components/addRecipe/AddRecipeForm";
import ConnectionVerification from "../../components/modal/ConnectionVerification";
import { useUserContext } from "../../context/userContext";

export default function AddRecipePage() {
  const { userData } = useUserContext();

  return (
    <div>
      {userData === "null" ? <ConnectionVerification /> : <AddRecipeForm />}
    </div>
  );
}
