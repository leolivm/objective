import styled from "styled-components";

export const Container = styled.div``;

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
  color: #555555;
  font-size: 32px;
  font-family: PT Sans Caption;
  font-weight: bold;
  padding: 0 113px;
  min-height: 80vh;
`;

export const Form = styled.form`
  display: flex;
`;

export const Search = styled.div`
  margin: 16px 0 40px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 295px;
      height: 32px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      transition: border 0.2s;

      &::placeholder {
        font-family: PT Sans;
        font-style: italic;
        color: #8e8e8e;
      }

      &:focus {
        border: 0.5px solid #d9d9d9;
      }
    }

    button {
      position: absolute;
      right: 16px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;

  a {
    width: 100%;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 9px;
`;

export const Title = styled.h4`
  font-size: 12px;
  font-family: PT Sans;
  color: #8e8e8e;
  font-weight: normal;

  &:nth-child(2) {
    width: 17%;
  }

  &:nth-child(3) {
    width: 25%;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  padding: 20px 24px;
  transition: box-shadow 0.2s ease-in-out;
  margin-bottom: 8px;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const HeroCharacter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
    width: 48px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #555;
    margin-left: 24px;
    max-width: 230px;
  }
`;

export const HeroSeries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  position: absolute;
  left: 31%;

  span {
    font-size: 14px;
    color: #555;
    font-family: PT Sans;
    font-weight: normal;
  }
`;

export const HeroEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  position: absolute;
  left: 74%;

  span {
    font-size: 14px;
    color: #555;
    font-family: PT Sans;
    font-weight: normal;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background: #fff;

  ul {
    list-style: none;
    display: flex;

    button {
      background: none;
      color: #8e8e8e;
      border: none;
      font-weight: bold;
      margin: 0 8px;
    }
  }

  a {
    text-decoration: none;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    padding: 8px 16px;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #555555;
    font-size: 14px;
    font-family: PT Sans;
    transition: 0.2s ease-in-out;

    &:hover {
      background: #209df0;
      color: #fff;
    }
  }
`;

export const NoResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #f9f9f9;
  font-size: 14px;
  font-weight: normal;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  padding: 20px 24px;
  transition: box-shadow 0.2s ease-in-out;
`;
