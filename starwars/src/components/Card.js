import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 15rem;
  width: 15rem;
  border: 1px solid lightgray;
  border-radius: 2rem;
  margin: 1rem;
  padding: 2rem;
  color: blue;
  background: lightgray;
  opacity: 0.85;

  div {
    margin: .5rem;
  }
  span {
    color: black;
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

  console.log(home);

  return (
    <StyledCard>
      <div>
        <h1>{value.name}</h1>
        <h3>{value.gender !== "n/a" ? <span>{value.gender}</span> : <span>robot</span>}</h3>
        <h3>Born in the year <span>{value.birth_year}</span> on the planet <span>{home}</span></h3>
      </div>
    </StyledCard>
    
  )
}