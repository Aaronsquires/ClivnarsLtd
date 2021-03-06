import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";
import { mergeClasses } from "@material-ui/styles";
import { drawerStyles } from "./SidebarStyles";

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const Sidebar = () => {
  const classes = drawerStyles();
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className={classes.drawer}>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <ul className="SidebarList">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </ul>
      {/* </IconContext.Provider> */}
    </div>
  );
};

export default Sidebar;
