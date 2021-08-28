// DO NOT DELETE
import React,{useState,useEffect} from 'react';

export const DogListContainer = (props) =>{

    const [breeds, setBreeds] = useState([]);
  
    useEffect (() =>{
      fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => setBreeds(data.message))
    });

    return (
        <React.Fragment>
        </React.Fragment>
    );

}