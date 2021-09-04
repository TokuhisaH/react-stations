// DO NOT DELETE

import React,{useState,useEffect} from 'react';
import './App.css'
// import {Description} from './Description';
import {Header} from './Header';
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {
    return (
      <React.Fragment>
        <body>  
          <Header />
          {/* <Description /> */}
          <DogListContainer />
        </body>
      </React.Fragment>
    );
}
