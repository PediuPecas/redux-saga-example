import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 0;
`;

export const Button = styled.button.attrs({
  type: "button"
})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? "#fff" : "#7D93A5")};
  border: 1px transparent solid;
  background-color: ${({ active }) => (active ? "#12C1DE" : "#EBEBEB")};
  margin-right: 4px;
  font-size: 14px;
  border-radius: 6px;
  transition: 300ms ease;

  &:hover {
    background-color: #21c8de;
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }
`;
