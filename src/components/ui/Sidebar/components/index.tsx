import { Link } from "react-router-dom";
import styled from "styled-components";

interface TogglableViewProps {
  is_active: boolean;
}

export const RootContainer = styled.div`
  width: 255px;
  background-color: #363740;
  height: 100vh;
  color: white;
`;

export const ListItemsContainer = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 30px 0px;
`;

const MenuItemContainer = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
`;

const MenuItemActiveIndicator = styled.div`
  width: 2px;
  height: 100%;
  background-color: #dde2ff;
`;

const MenuItemContentContainer = styled(Link)<TogglableViewProps>`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 30px;
  text-decoration: none;
  background-color: ${(props) => (props.is_active ? "rgba(221, 226, 255, 0.08)" : "rgba(221, 226, 255, 0.0);")};
  color: ${(props) => (props.is_active ? "#DDE2FF" : "#A4A6B3")};
  :hover {
    background-color: rgba(221, 226, 255, 0.08);
    color: #dde2ff;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a4a6b3;
  opacity: 0.08;
`;

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  is_active: boolean;
  href: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, text, is_active } = props;

  return (
    <MenuItemContainer {...props}>
      {is_active ? <MenuItemActiveIndicator /> : null}
      <MenuItemContentContainer is_active={is_active} to={props.href}>
        {icon}
        {text}
      </MenuItemContentContainer>
    </MenuItemContainer>
  );
};
