import React from "react";
import styled from "styled-components";
import Link from "next/link";

function WelcomeView() {
  return (
    <SContainer>
      <SH1>Welcome to the ToDoList App</SH1>
      <Link href="/todolist">
        <SButton>Go to App</SButton>
      </Link>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const SH1 = styled.h1``;

export default WelcomeView;
