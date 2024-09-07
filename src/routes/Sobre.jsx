
import React from 'react';
import { SobreStyle } from '../css/SobreStyle';

const Sobre = () => {
    return (
        <SobreStyle>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"></link>
            <section className='classe'>
                <h3 className='titulo '>ZONA FITNESS</h3>
                <p className='texto'>ZONA FITNESS é uma empresa nacional de esportes voltada para venda de roupas esportivas. Atuamos principalemente com camisetas de times, sendo eles nacionais, internacionais ou até mesmo seleções, Bolas de Futebol e Chuteiras. </p>
            </section>
        </SobreStyle>
    );
};

export default Sobre;
