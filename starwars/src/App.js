import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card.js";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 2rem;
  margin: 2rem;
  width: 95%;
  `

const App = () => {
  const [ person, setPerson ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await axios.get("https://swapi.co/api/people/");
        setPerson(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(person);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Grid >
          {person.map((value, index) => {
          return <Card value={value} key={index} />
        })}
      </Grid>
    </div>
  );
}

export default App;
