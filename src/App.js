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

  function Header(props){
    return <React.Fragment>
      <header>Dog Button</header>
    </React.Fragment>
  }

  function Descripption(props){
    return <React.Fragment>
      <h2>犬の画像を表示するためのアプリどす</h2>
      <DogImage ImageUrl={dogUrl}/>
      <div class="button_wrapper">
        <button onClick={onButtonclick}>on click</button>
      </div>      
    </React.Fragment>
  }

  function DogImage(props){
    return <React.Fragment>
      <img src={props.ImageUrl}></img>
    </React.Fragment>
  }

    return (
      <React.Fragment>
        <body>  
          <Header/>
          <Descripption/>
        </body>
      </React.Fragment>
    )
}
