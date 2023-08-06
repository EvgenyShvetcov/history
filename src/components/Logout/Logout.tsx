import "./Logout.scss";
import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { getAuthSlice } from "../../store/redux/auth";
import { useDispatch } from "react-redux";

export const Logout: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.removeItem("token");
    dispatch(
      getAuthSlice.actions.getAuthData({ user: null, isAuthenticated: false })
    );
    navigate("/");
  }, [dispatch]);

  return <div>Logging Out</div>;
};
