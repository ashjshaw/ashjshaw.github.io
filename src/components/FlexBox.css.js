import styled from "styled-components";

export const FlexBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
transition: 200ms ease ;
background-color: ${props => props.colour};
margin-left: ${props => props.show ? '10rem' : '5rem'};
padding: 1rem;
button{
    z-index: 2;
    margin-top: auto;
    width: 100px;
    height: 50px;
    align-self: right;
}
@media (max-width: 912px) {
    margin-left: 0;
  }
`;

export const CodeFlexBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
transition: 200ms ease ;
background-color: ${props => props.colour};
margin-left: ${props => props.show ? '10rem' : '5rem'};
align-items: center;
text-align: center;
@media (max-width: 912px) {
    margin-left: 0;
  }
`;
