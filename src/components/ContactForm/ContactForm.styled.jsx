import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 10px 80px;
    width: 320px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: 700;
  padding: 10px;
`;

export const FormInput = styled.input`
    font-size: 16px;
    height: 36px;
    outline: none;
    padding: 0 12px;
    border: 1px solid orange;
    border-radius:8px;
    color: teal;

  :focus {
    border-color: rgb(111, 111, 207);
  }
  ::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
  }
`;

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
  width: 200px;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #000cb6b7;
    color: #000;
  }
`;
