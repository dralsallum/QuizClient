import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import { userSelector } from "./redux/userRedux"; // Import the userSelector from your user slice

export default function useRequireAuth() {
  const navigate = useNavigate();
  const { currentUser } = useSelector(userSelector);

  useEffect(() => {
    // If user is not authenticated, redirect to signup
    if (!currentUser) {
      navigate("/signup");
    }
  }, [currentUser, navigate]);
}
