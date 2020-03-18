import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-size: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: bold;

    svg {
      margin-right: 8px;
      font-size: 24px;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #ddd;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #ddd;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 6px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  margin-top: 30px;
`;

export const Button = styled.button`
  background: ${props => props.color};
  color: #fff;
  font-weight: bold;
  border: 1px solid #aaa;
  padding: 6px 12px;
  margin-left: 10px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IssueContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginateButton = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
  background: #fff;
  margin: auto 10px;
  color: #7159c1;
  font-weight: bold;
  font-size: 32px;

  &[disabled] {
    color: #bbb;
  }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  background: #7159c1;
  color: #fff;
  padding: 8px 16px;
  margin: 10px auto 0;
  border-radius: 4px;
  width: 100px;

  span {
    margin-left: 4px;
  }
`;
