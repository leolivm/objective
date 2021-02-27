import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  height: 64px;
  background: #fff;
  margin-bottom: 40px;
  padding: 21px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    max-width: 1245px;
    display: flex;
    align-items: center;

    img {
      width: 104px;
      height: 30px;
    }
  }
`;

export const Profile = styled.div`
  max-width: 1245px;
  margin: 0 auto;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;

    @media (max-width: 450px) {
      position: relative;
      flex-direction: column;
      justify-content: center;
      margin-right: 50px;
      align-items: flex-end;
    }

    strong {
      margin-right: 8px;

      @media (max-width: 450px) {
        margin: 0;
      }
    }

    p {
      font-size: 15px;
      font-weight: bold;
      font-family: PT Sans Caption;
      margin-left: 16px;
      color: #555;
      padding: 8px 6px;
      background: #f5f5f5;
      border-radius: 4px;

      @media (max-width: 450px) {
        position: absolute;
        right: -50px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 16px;

  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  max-width: 600px;
  min-height: 295px;
  border-radius: 8px;
  border: 0.5px solid #d9d9d9;
  box-shadow: 0px 0px 5px #00000033;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  ul {
    display: flex;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  align-self: flex-start;

  img {
    width: 250px;
    border-radius: 4px;
    margin: 0 8px 8px 0;
    border: 4px solid #555555;
  }
`;

export const Name = styled.h5`
  font-size: 36px;
  font-weight: bold;
  font-family: PT Sans Caption;
`;

export const History = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 12px;
      margin-top: 8px;
    }

    > div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 8px;
    }
  }
`;
