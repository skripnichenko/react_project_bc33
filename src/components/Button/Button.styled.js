import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.isGray ? "#BDBDBD" : " #FF6B0A")};
  padding: 8px 16px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: ${(props) => (props.isGray ? "32px" : "0px")};
`;
