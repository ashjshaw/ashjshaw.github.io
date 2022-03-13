import styled from "styled-components";

export const CardWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 35vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  background-color: #464f59;
  border-radius: 10px;
  h4 {
    font-size: 3vh;
    letter-spacing: 1.1px;
    color: whitesmoke;
    font-weight: 300;
    text-align: center;
    padding-top: 1.5vh;
  }
  p {
    color: #ab6d00;
    text-align: center;
    font-size: 1.9vh;
  }
`;

export const CardImage = styled.img`
  width: 35vh;
  height: 35vh;
  border-radius: 10px 10px 0px 0px;
`;

export const CardEmailButton = styled.a`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  font-weight: 750;
  height: 4vh;
  width: 75%;
  text-align: center;
  color: black;
  font-size: 3vh;
  font-weight: lighter;
  text-decoration: none;
  background-color: white;
  padding-bottom: 1vh;
  cursor: pointer;
  img {
    margin-top: 0.5vh;
    margin-right: 17.5%;
    margin-left: 3%;
    width: 15%;
    height: 3.5vh;
  }

  @media (max-width: 912px) {
    /* width: 100%; */
  }
`;
export const CardAddress = styled.div`
  margin-top: 2vh;
  p {
    font-size: 2.5vh;
    line-height: 5.5vh;
    color: whitesmoke;
  }
`;
export const CardFooter = styled.footer`
  height: 6vh;
  background-color: #323940;
  margin-top: auto;
  border-radius: 0px 0px 5px 5px;
  text-align: center;

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: whitesmoke;
    font-size: 2vh;
    text-decoration: none;
  }
`;
