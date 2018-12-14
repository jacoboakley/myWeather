import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 33vh;
  justify-content: space-around;
  width: 66vw;

  input:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  background: #2ecc71;
  border-radius: 50%;
  height: 2.5rem;
  margin: 0;
  padding: 0;
  width: 2.5rem;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid black;
  color: white;
  font-size: 2rem;
  height: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 13rem;
`;

const Search = ({ submit, change }) => (
  <SearchWrapper>
    <h1>My Weather</h1>
    <Input type="number" onChange={change} placeholder="Zipcode" name="zipcode" />
    <Submit type="submit" onClick={submit}>GO</Submit>
  </SearchWrapper>
);

export default Search;


Search.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
