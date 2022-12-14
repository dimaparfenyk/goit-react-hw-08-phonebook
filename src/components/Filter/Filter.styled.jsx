import styled from "styled-components";

export const Input = styled.input`
    border-radius:8px;
    border: 1px solid orange;
    color: black;
    font-size: 14px;
    height: 40px;
    outline: none;
    padding: 0 10px;
    min-width: 300px;
    :focus {
    border-color: rgb(111, 111, 207);
  }

  ::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

