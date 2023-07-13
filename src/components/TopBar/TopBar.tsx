import { Switch } from "@mui/material";
import "./TopBar.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Color, themeSlice } from "../../store/redux/theme";

export const TopBar = () => {
  const currentTheme = useSelector(themeSlice.actions.getTheme);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <div>Menu</div>
      <Switch onChange={() => dispatch(themeSlice.actions.changeTheme)} />
    </div>
  );
};
