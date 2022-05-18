import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const topics=[
  {id:1, title:"여행"},
  {id:2, title:"맛집"},
  {id:3, title:"숙박"}
]

function Headline(props){
  return <App />
}
function Description(props){
  return <article>
  <h2>{props.title}</h2>
  <p>{props.body}</p>
  </article>
}
function Deeplink(props){
  const lis =[]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href = {'/read/'+t.id}>{t.title}</a></li>)
  }
  return<nav> 
  <ol>
    {lis}
  </ol>
  </nav>
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Headline onChangeMode={function(){alert('Lets go!!')}}></Headline>
    <Description title ="enjoy!" 
    body = "유어트립입니다."></Description>
    <Deeplink topics={topics}></Deeplink>

  </StrictMode>
);
