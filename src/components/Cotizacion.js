import React from 'react';
import styled from '@emotion/styled';

const ResutladoDiv = styled.div`
  color: #56bafb;
  font-family: 'Bebas Neue', cursive;
  border-radius: 6px;
  border: 3px groove #56bafb;
  padding: 20px;
  margin-top: 20px;
`;

const Precio = styled.p`
  font-size: 35px;

  span {
    font-weight: bold;
  }
`;
const Info = styled.p`
  font-size: 20px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <ResutladoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        El precio mas alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        El precio mas bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Varioacipon ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResutladoDiv>
  );
};

export default Cotizacion;
