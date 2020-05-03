import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '..//hooks/useMoneda';
import useCriptoMoneda from '..//hooks/useCriptoMoneda';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: node;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = (props) => {
  const monedas = [
    { codigo: 'USD', nombre: 'Dolar Estados Unidos' },
    { codigo: 'MXN', nombre: 'PESO Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
  ];
  const [moneda, SelectMonedas] = useMoneda('Elije tu moneda', '', monedas);
  const [criptoMoneda, SelectCripto] = useCriptoMoneda('Elije tu criptomoneda', '');
  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="butmit" value="Calcular" />
    </form>
  );
};

export default Formulario;
