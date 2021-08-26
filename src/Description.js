// DO NOT DELETE
import React,{useState,ReactDOM} from 'react';
import {DogImage} from './DogImage';

export const Descripption =(props)=>{

    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  
    const onButtonclick = () =>{
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDogUrl(data.message))
    }
  
    return (
    <React.Fragment>
      <h2>犬の画像を表示するためのアプリです</h2>
      <DogImage url={dogUrl}/>
      <div class="button_wrapper">
        <button onClick={onButtonclick}>on click</button>
      </div>      
    </React.Fragment>
    )
  }

