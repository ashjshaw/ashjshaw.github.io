import styled from "styled-components";

export const HomeMainSection = styled.main`
  display: flex;
  padding: 1rem;
  img {
    width: 50vw;
    height: 50vh;
    flex: 1;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%) ;
    @media (max-width: 912px) {
      display: none;
    }
  }
`;

export const HomeAboutMeDiv = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  h3 {
    text-align: center;
    background-color: darkslategray;

    @media (min-width: 912px) {
      margin-right: 2.5vw;
    }
  }
  color: whitesmoke;
`;

export const ExperienceMainSection = styled.main`
  background-color: rgb(112, 128, 144, 0.8);
  padding: 2.5vw;
  color: whitesmoke;
  a {
    text-decoration: none;
  }
`;
