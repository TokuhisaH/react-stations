// DO NOT DELETE

import React,{useState,useEffect} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const onButtonclick = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setDogUrl(data.message))
  }
    return (
      <React.Fragment>
        <body>  
          <header>Dog Button</header>
          <h2>犬の画像を表示するためのアプリです</h2>
          <img src={dogUrl}></img>
          <div class="button_wrapper">
            <button onClick={onButtonclick}>on click</button>
          </div>
        </body>
      </React.Fragment>
    )
}
