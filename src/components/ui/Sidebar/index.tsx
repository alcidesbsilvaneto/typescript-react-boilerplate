import * as React from "react";
import { Divider, ListItemsContainer, LogoContainer, MenuItem, RootContainer } from "./components";

// Importing assets
import gears from "@assets/svg/gears.svg";
import { RiHome2Line } from "react-icons/ri";
import { BsPower } from "react-icons/bs";
import { useLocation } from "react-router";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <RootContainer>
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
    </RootContainer>
  );
};

export default Sidebar;
