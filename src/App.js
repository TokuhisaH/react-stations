// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <React.Fragment>  
      <header>Hello アプリ</header>
      <h2>犬の画像を表示するためのアプリです</h2>
      <img src="https://images.dog.ceo/breeds/sheepdog-english/n02105641_3499.jpg"></img>
    </React.Fragment>
  )
}
