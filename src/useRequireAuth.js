import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "./redux/userRedux";

export default function useRequireAuth() {
  const navigate = useNavigate();
  const { currentUser } = useSelector(userSelector);

  useEffect(() => {
    if (!currentUser) {
      navigate("/signup");
    }
  }, [currentUser, navigate]);
}
