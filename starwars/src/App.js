import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card.js";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
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
      {person.map((value, index) => {
        return <Card value={value} key={index} />
      })}
    </div>
  );
}

export default App;
