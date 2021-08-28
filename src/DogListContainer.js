// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = (props) =>{

    // APIで拾ってきた犬種リスト
    const [breeds, setBreeds] = useState([]);

    // プルダウンで選択した犬
    const[selectedBreed,setSelectedBreed]= useState()
  
    useEffect (() =>{
      fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => setBreeds(data.message))
    },[]);

    return (
        <React.Fragment>
            <BreedsSelect breeds={Object.keys(breeds)} />
        </React.Fragment>
    );
}