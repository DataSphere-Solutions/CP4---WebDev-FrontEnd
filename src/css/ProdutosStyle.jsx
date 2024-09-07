import styled from "styled-components";


export const ProdutosStyle =styled.section`

  .produtos-esportivos {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }

  .produtos-esportivos div {
    width: 30%;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .produtos-esportivos img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .produtos-esportivos h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .produtos-esportivos p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
`
        

