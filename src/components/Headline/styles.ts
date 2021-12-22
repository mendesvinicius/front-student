import styled from "styled-components";

export const CustomHeadline = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;

  button {
    border: 0;
    width: 90px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 5px;
    background: var(--green);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #4f4f4f;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    position: relative;

    svg {
      left: 18px;
      color: #979797;
      position: absolute;
    }

    input {
      width: 210px;
      height: 32px;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      border-radius: 8px;
      padding: 0 24px 0 40px;
      border: 1px solid #ebebeb;
    }
  }
`;
