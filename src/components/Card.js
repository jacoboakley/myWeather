import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  width: 100%;

  border: 2px solid purple;

  h2 {
    margin: 0;
    padding: 0 1.5rem 0 1.5rem;
  }
`;

const Card = ({ data }) => (
  <Wrapper>
    <h2>
      {data.name}
    </h2>
    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} />
    <h2>
      {data.weather[0].main}
    </h2>
    <h2>
      {Math.round(data.main.temp)}
      {'\u00BA'}
    </h2>
  </Wrapper>
);

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.array.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
