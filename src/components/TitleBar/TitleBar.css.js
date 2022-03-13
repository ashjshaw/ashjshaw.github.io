import styled from "styled-components";
import homeimage from '../../images/homeimage.png';


export const TitleBarWrapper = styled.div`
    margin-top: -5rem;
    margin-right: -1rem;
    margin-left: -1rem;
    flex: 1;
    padding-top: 45vh;
    padding-bottom:45vh;
    text-align: center;
    background-image: url(${homeimage});
    background-size:cover;
    overflow: hidden;

    h1{
        font-size: 6vw;
        color: white;
    }
    p{  color: white;
        font-size: 1.5vw;
        font-weight: 900;
    }
`; 