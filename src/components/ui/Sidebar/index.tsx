import * as React from "react";
import { Divider, ListItemsContainer, LogoContainer, MenuItem, RootContainer, ToggleButton } from "./components";

// Importing assets
import gears from "@assets/svg/gears.svg";
import { RiHome2Line } from "react-icons/ri";
import { BsPower } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@redux/index";
import { toggleSidebar } from "@redux/AppData.store";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const { isSidebarToggled } = useSelector((state: RootState) => state.appSettings);
  const dispatch = useAppDispatch();

  return (
    <RootContainer is_toggled={isSidebarToggled}>
      <LogoContainer>
        <img src={gears} width={50} height={50} alt="gears" />
        <span style={{ color: "#A4A6B3", fontWeight: "bold", fontSize: 19 }}>painel de controle</span>
      </LogoContainer>
      <ListItemsContainer>
        <MenuItem
          href="/"
          icon={<RiHome2Line color={pathname === "/" ? "#dde2ff" : "#A4A6B3"} style={{ marginRight: 10 }} size={16} />}
          is_active={pathname === "/"}
          text={"Home"}
        />
        <MenuItem
          href="/other"
          icon={<RiHome2Line color={pathname === "/other" ? "#dde2ff" : "#A4A6B3"} style={{ marginRight: 10 }} size={16} />}
          is_active={pathname === "/other"}
          text={"Other"}
        />
        <Divider />
        <MenuItem
          href="/logout"
          icon={<BsPower color={pathname === "/logout" ? "#dde2ff" : "#A4A6B3"} style={{ marginRight: 10 }} size={16} />}
          is_active={pathname === "/logout"}
          text={"Sair"}
        />
      </ListItemsContainer>
      <ToggleButton
        is_sidebar_toggled={isSidebarToggled}
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <BiMenu size={32} />
      </ToggleButton>
    </RootContainer>
  );
};

export default Sidebar;
