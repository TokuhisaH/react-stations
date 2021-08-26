// DO NOT DELETE

import React,{useState,useEffect} from 'react';
import './App.css'
import {Description} from './Description';
import {Header} from './Header';

/**
 * 
 * @type {React.FC}
 */
export const App = (props) => {
    return (
      <React.Fragment>
        <body>  
          <Header />
          <Description />
        </body>
      </React.Fragment>
    );
}
