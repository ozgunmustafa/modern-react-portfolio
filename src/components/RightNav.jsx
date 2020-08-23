import React from "react";
import styled from "styled-components";
import data from "../data"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 200px;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>
        <a href={`mailto:${data.contactEmail}`}  className="active">
          Sent Mail
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
