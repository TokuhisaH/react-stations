// DO NOT DELETE

import React,{useState} from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/sheepdog-english/n02105641_3499.jpg");


  return (
    <React.Fragment>  
      <header>Hello アプリ</header>
      <h2>犬の画像を表示するためのアプリです</h2>
      <img src={dogUrl}></img>
    </React.Fragment>
  )
}
