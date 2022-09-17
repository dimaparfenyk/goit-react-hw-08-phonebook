import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #457aab;
  border: none;
  border-radius:8px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  height: 40px;
  width: 80px;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #000cb6b7;
    color: #000;
  }
`;

export const Text = styled.p`
font-weight: 500;
margin-right:15px;
`
export const SubText = styled.span`
color:orange;

margin-right:15px;
font-weight: 500;
`

 
