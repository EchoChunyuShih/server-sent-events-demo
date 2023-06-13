import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  from { border-color: transparent }
  50% { border-color: orange }
  to { border-color: transparent }
`;
export const ChildContainer = styled.div`
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  width: 100%;
  text-align: left;
  background-color: black;
`;
export const TypingEffect = styled.span`
  ::after {
    content: '';
    border-right: 5px solid orange;
    animation: ${blinkCaret} 0.5s step-end infinite;
    box-sizing: border-box;
  }
  width: 70%;
  margin: auto;
  white-space: pre-wrap;
  font-weight: 200;
  font-size: 24px;
  padding: 20px;
  color: whitesmoke;
`;
export const NavigateButton = styled.button`
  border-radius: 8px;
  margin-top: 2rem;
  width: 80px;
  height: 40px;
  cursor: pointer;
  background: black;
  color: #ffffff;
  padding: 4px;
  border: 2px solid black;
`;
export const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
