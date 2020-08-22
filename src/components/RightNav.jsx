import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 10px 10px;
  }
  @media(max-width:768px){
      flex-flow:column nowrap:
  }
`;

const RightNav = () => {
  return (
    <Ul>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </Ul>
  );
};
export default RightNav;
