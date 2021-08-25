import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

getResource("https://swapi.dev/api/people/1")
.then( (body) => console.log(body));