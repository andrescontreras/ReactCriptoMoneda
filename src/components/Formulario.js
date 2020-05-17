import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '..//hooks/useMoneda';
import useCriptoMoneda from '..//hooks/useCriptoMoneda';
import Axios from 'axios';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #56bafb;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    background-color: #c9e1f1;
    color: #0d2235;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptoMoneda }) => {
  const [listaCripto, guardarCripto] = useState([]);

  const monedas = [
    { codigo: 'USD', nombre: 'Dolar Estados Unidos' },
    { codigo: 'MXN', nombre: 'PESO Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
  ];
  const [moneda, SelectMonedas] = useMoneda('Elije tu moneda', '', monedas);
  const [criptoMoneda, SelectCripto] = useCriptoMoneda('Elije tu criptomoneda', '', listaCripto);
  const [error, guardarError] = useState(false);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await Axios.get(url);
      guardarCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const cotizarMoneda = (e) => {
    console.log('22222');
    e.preventDefault();
    if (moneda === '' || criptoMoneda === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptoMoneda(criptoMoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
