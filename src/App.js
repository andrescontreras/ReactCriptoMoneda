import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Axios from 'axios';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #56bafb;
    display: block;
  }
`;

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      if (moneda === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const resultado = await Axios.get(url);
      guardarCargando(true);
      setTimeout(() => {
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
      }, 2000);
    };
    cotizarCriptoMoneda();
  }, [criptoMoneda, moneda]);

  const componente = cargando ? <Spinner /> : <Cotizacion resultado={resultado} />;

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario guardarMoneda={guardarMoneda} guardarCriptoMoneda={guardarCriptoMoneda}></Formulario>
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
