import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {useState} from 'react';
const topics=[
  {id:1, title:"여행"},
  {id:2, title:"맛집"},
  {id:3, title:"숙박"}
]

function Headline(props){
  return (
    <div>
      <h1>안녕하세요</h1>
      <p><a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>Start with your trip :)</a></p>
    </div>
  );
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
    lis.push(<li key={t.id}>
      <a title = {t.title} href = {'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.title);
      }}>
        {t.title}</a></li>)
  }
  return<nav> 
  <ol>
    {lis}
  </ol>
  </nav>
}
function Details(props){
  const [mode,setState] = useState('home');

  let content = null;
  if (mode ==='home'){
    content =<h3>Hello<p>home입니다</p></h3>
  }else if(mode ==='para'){
    content =<h3>Hello<p>para입니다</p></h3>}
  return<h2>
    {content}</h2>
  
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Headline onChangeMode={()=>{
      ///alert('Lets go!!');
      setState('home');
    }}></Headline>
    <Description title ="enjoy!" 
    body = "유어트립입니다."></Description>
    <Deeplink topics={topics} onChangeMode={(title)=>{
      ///alert("hi");
      setstate('para');
      }}></Deeplink>
    <Details></Details>

  </StrictMode>
);
