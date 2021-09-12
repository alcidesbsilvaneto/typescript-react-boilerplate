import styled from "styled-components";

export const RootContentContainer = styled.div<{ is_sidebar_toggled: boolean }>`
  background-color: #f7f8fc;
  position: relative;
  z-index: 1;
  left: ${(props) => (props.is_sidebar_toggled ? "0px" : "-255px")};
  transition: left 1s;
  min-width: 100vw;
  padding: 80px 20px;
`;
