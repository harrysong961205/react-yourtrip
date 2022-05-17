import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
function Headline(){
  return <App />
}
function Description(props){
  return <article>
  <h2>{props.title}</h2>
  <p>{props.body}</p>
  </article>
}
function Deeplink(props){
  const topics=[
    {id:1, title:}
  ]
  return <ol>
    <li><a href = "/read/{}">{props.title}</a></li>
  </ol>
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Headline></Headline>
    <Description title ="enjoy!" 
    body = "유어트립입니다."></Description>
    <Deeplink title = "여행"></Deeplink>

  </StrictMode>
);
