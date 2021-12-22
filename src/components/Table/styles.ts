import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  & div {
    flex-direction: column;
  }
`;

export const CustomTable = styled.table`
  background: #fdfdff;
  text-align: center;
  border-radius: 14px;
  border: 1px solid #ebebeb;

  thead {
    th {
      color: #4f4f4f;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      padding: 16px 0;
      border-bottom: 1px solid #ebebeb;
    }
  }

  tbody {
    td:last-child {
      display: flex;
      align-items: center;
      justify-content: center;

      button:first-child {
        color: var(--white);
        background: var(--red);
      }

      button {
        border: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--green);
      }
    }

    td {
      padding: 8px 0;
      font-size: 14px;
      line-height: 20px;

      button + button {
        margin-left: 8px;
      }
    }
  }
`;
