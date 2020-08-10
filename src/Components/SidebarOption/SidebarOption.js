import React from "react";
import "./sidebarOption.css";
// import HomeIcon from "@material-ui/icons/Home";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && `sidebarOption__active`}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
