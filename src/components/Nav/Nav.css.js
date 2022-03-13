import styled from "styled-components";

export const NavWrapper = styled.nav`
  cursor: pointer;
  z-index: 1;
  width: ${props => props.show ?  '10rem' : '5rem' };
  height: 100vh;
  position: fixed;
  background-color: #464F59;
  transition: width 200ms ease;
  opacity: ${props => props.show ?  '1' : '0.75'};
  img{
    transform: ${props => props.show ? 'rotate(180deg)': 'rotate(0deg)'}
  }

  @media (max-width: 912px) {
    opacity: ${props => props.show  ? '1' : '0.4'};
    background-color: ${props => props.show ?  '#464F59' : 'rgba(0,0,0,0)' };
    width: ${props => props.show ?  '100vw' : '5rem' };;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;
export const NavItem = styled.li`
  display: ${props => props.display};
  margin-top: 1vh;
  margin-bottom: 2vh;
  justify-content: center;
  width: 100%;
  :hover{
    background-color: #778899;
  }
  :last-child {
    margin-top: auto;
    margin-bottom: 5vh;
  }
  a {
    color: white;

    height: 5rem;
    text-decoration: none;
    font-size: 1.4rem;;
    :hover{
        font-size: 1.6rem;
    }
  }
`;

