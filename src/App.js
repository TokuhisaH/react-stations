// DO NOT DELETE

import React,{useState,useEffect} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {

  const [dogUrl, setDogUrl] = useState("");

  const onButtonclick = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(data => setDogUrl(data.message))
  }
    return (
      <React.Fragment>  
        <header>Hello アプリ</header>
        <h2>犬の画像を表示するためのアプリです</h2>
        <button onClick={onButtonclick}>
        on click
        </button>
        <img src={dogUrl}></img>
      </React.Fragment>
    )
}
