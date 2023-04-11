import styled from "styled-components";

const SButton = styled.button`
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SAddButton = styled(SButton)`
  color: green;
  border-color: green;
`;

const SDeleteButton = styled(SButton)`
  color: red;
  border-color: red;
`;

const SEditButton = styled(SButton)`
  color: blue;
  border-color: blue;
`;

export { SButton, SAddButton, SDeleteButton, SEditButton };
