import styled from "styled-components";


export const ToDoWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 5vh;
background-color: rgba(100, 0, 100, 0.4);
width: 50vw;
max-width: 50%;
margin-left: auto;
margin-right: auto;
@media (max-width: 918px){
    width: 90%;
}
`

export const ToDoForm = styled.form`
margin-left: auto;
margin-right: auto;
ul{
    list-style-type: none;
}
`

export const TaskButton = styled.button`
width: 20px;
height: 20px;
background-color: red;
margin-left: auto;
`

export const ToDoItem = styled.div`
display: flex;
`