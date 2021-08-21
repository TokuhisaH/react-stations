// DO NOT DELETE

import React,{useState,useEffect} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {

  const [response, setResponse] = useState("");
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setResponse(data.message))
  },[dogUrl]);

  const onButtonclick = () =>{
    setDogUrl(response)
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
