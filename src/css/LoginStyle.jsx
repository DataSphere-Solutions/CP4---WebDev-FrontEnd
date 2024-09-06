import styled from "styled-components";

export const LoginStyle =styled.section`

#userhtml{
    padding: 2PX 3PX 2PX 3PX;
    border-radius: 10px;
    background-color: rgba(255, 63, 89, 0);
    border: 10px solid var(--color--3);
    color: var(--color--3);
    cursor: pointer;
    font-size: 40px;
    font-weight: 600;
    transition:all 0.3s;
    margin-right: 70px;
    width: 40%;
    
}
#userhtml::placeholder{
  color: var(--color--3);
}
#userhtml:hover{
  transform: translateY(-10px);
  background-color: var(--color--3);
  color: var(--color--1);
}

#senhahtml{
  padding: 2PX 3PX 2PX 3PX;
  border-radius: 10px;
  background-color: rgba(255, 63, 89, 0);
  border: 10px solid var(--color--3);
  color: var(--color--3);
  cursor: pointer;
  font-size: 40px;
  font-weight: 600;
  transition:all 0.3s;
  margin-left: 100px;
  width: 37%;
}

#senhahtml::placeholder{
color: var(--color--3);
}
#senhahtml:hover{
transform: translateY(-10px);
background-color: var(--color--3);
color: var(--color--1);
}
.confirmacao {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

#entrar{
    padding: 5PX 5PX 5PX 5PX;
    border-radius: 10px;
    background-color: rgba(255, 63, 89, 0);
    border: 10px solid var(--color--3);
    color: var(--color--3);
    cursor: pointer;
    margin-left: 20px;
    font-size: 50px;
    font-weight: 600;
    transition:all 0.3s;
    margin-bottom: 70px;
}

#entrar:hover{
  transform: translateY(-10px);
  background-color: var(--color--3);
  color: var(--color--1);
}
`