import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 15rem;
  width: 20rem;
  border: 2px solid gray;
  border-radius: 2rem;
  margin: 1rem;
  padding: 2rem;
  color: blue;
  background: lightgray;
  opacity: 0.72;
  &:hover {
    opacity: 0.91;
    transition: opacity 0.5s;
    transform: scale(1.1);
    transition: transform 0.5s;
  }
  @media (max-width: 750px) {
    width: 80%;
  }

  span {
    color: tomato;
  }
  
`

export default function Card({ value }) { // take in props from App.js
  const [ home, setHome ] = useState();

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await axios.get(`${value.homeworld}`);
        setHome(data.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <StyledCard>
        <h1>{value.name}</h1>
        <h3>{value.gender !== "n/a" ? <span>{value.gender}</span> : <span>robot</span>}</h3>
        <h3>Born in the year <span>{value.birth_year}</span> on the planet <span>{home}</span></h3>
      </StyledCard>
    
  )
}