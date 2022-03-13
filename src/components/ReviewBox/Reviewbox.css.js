import styled from 'styled-components'

export const ReviewWrapper = styled.div`
display: flex;
width: 80vw;
border-top: 5px solid darkslategray;
padding-top: 5vh;
h3{ 
    flex: 2;
    text-align: center;
    margin-right: 1vw;
    font-size: 2vw;
    color: whitesmoke;
    @media (max-width: 912px){
      flex: 0;
    }
}
@media (max-width: 912px) {
    width: 80vw;
    h3{
        font-size: 4vw;
    }
  }
`

export const ReviewContentWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: 2;
margin-left: auto;
`

export const RightArrow = styled.img`
position: absolute;
top: 50%;
right: -0.01vw;
height: 4vh;
width: 4vw;
cursor: pointer;
transition: 100ms ease;
:hover{
  height: 4.25vh;
  width: 4.25vw;
}
`
export const LeftArrow = styled.img`
position: absolute;
top: 50%;
height: 4vh;
width: 4vw;
left: 0.01vw;
cursor: pointer;
transform: rotate(180deg);
transition: 100ms ease;
:hover{
  height: 4.25vh;
  width: 4.25vw;
}
`

export const ReviewDiv = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.7);
height: 20vh;
width: 100%;
padding:2vw 5vw;
text-align: center;
`

export const ReviewName = styled.p`
font-style: italic;
margin-top: auto;
`

export const ReviewText = styled.p`
font-size: 1.25rem;
@media (max-width: 912px){
      font-size: 1rem;
    }
`
export const ReviewStars = styled.p`

`