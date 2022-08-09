import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  li:nth-of-type(2n) {
    margin: 0 20px;
  }
`;

export const OptionItems = styled.li`
  border-radius: 10px;
  overflow: hidden;
  width: 100px;
  :hover {
    transform: scale(1.2);
  }
`;

export const OptionButton = styled.button`
  background-color: blue;
  font-weight: 500;
  font-size: 20px;
  color: white;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
