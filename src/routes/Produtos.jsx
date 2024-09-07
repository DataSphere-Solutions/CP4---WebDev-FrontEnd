
import { ProdutosStyle } from '../css/ProdutosStyle'; 

const Produtos = () => {
  return (
    <ProdutosStyle>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"></link>
      <section className="produtos-esportivos">
        <div>
          <img src="tenis.jpg" alt="Tênis esportivo" />
          <h3>Tênis Esportivo</h3>
          <p>
            Confortável e resistente, ideal para corridas de longa distância. Feito com
            materiais leves e tecnologia avançada para garantir o melhor desempenho em
            suas atividades físicas.
          </p>
        </div>

        <div>
          <img src="bola.jpg" alt="Bola de Futebol" />
          <h3>Bola de Futebol</h3>
          <p>
            Bola de futebol de alta qualidade, projetada para proporcionar controle
            preciso e durabilidade em todas as condições. Perfeita para partidas
            profissionais ou amadoras.
          </p>
        </div>

        <div>
          <img src="camisa.jpg" alt="Camisa de time" />
          <h3>Camisa de time</h3>
          <p>
            Camisa extremamente leve, para praticar esportes e estar na moda com seu
            time preferido.
          </p>
        </div>
      </section>
    </ProdutosStyle>
  );
};

export default Produtos;
