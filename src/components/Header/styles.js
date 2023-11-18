import styled from "styled-components";

export const Header = styled.header`
width: 100%;
height: 1vh;
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
color:#fff;
padding: 50px;
font-size: 19px;

.logo{
    font-size: 60px;
    justify-content: center;
    display: flex;
    height: -1vh;
    background-color: red;


    

    

}


ul {
    display: flex;
    gap: 35px;
    margin-right: 45px;
}

li {
    list-style: none;
    color: red;
    
    
}

a {
    text-decoration: none;
    text-transform: uppercase;
    color:white;
    font-weight: 400;
}

a:hover{
    color:red;
    transition: .8s;
}
`