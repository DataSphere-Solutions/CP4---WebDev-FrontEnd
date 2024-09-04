import styled from "styled-components";

export const NavStyle = styled.header `

.nav{
    grid-area:nav;
    background:#19abff;
}

.nav .container{
    display:flex;
    padding: 30px 40px;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:60px;
}
.nav .logo{
    width: 200px;
}
.nav ul .navLink{
    font-size:1rem;
    font-weight:700;
    text-transform:uppercase;
    padding:5px 10px;
    color:#ffffff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    transition: color 0.3s, transform 0.3s;
}
.nav ul .navLink:hover{
    font-size: large;
    transform: scale(1.2);
    color:#66dafd;
    
}

`