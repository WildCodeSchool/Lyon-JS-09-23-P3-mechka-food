import { TextareaAutosize, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export default function TestContext() {
  const { userData, logout } = useUserContext();
  const navigate = useNavigate();

  const logoutFromSession = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      {userData && (
        <div>
          <TextareaAutosize />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={logoutFromSession}
          />
        </div>
      )}
    </div>
  );
}
