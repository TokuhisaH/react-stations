// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { DogListContainer } from './DogListContainer';

export const BreedsSelect = (props) =>{
    
    const breeds =props.breeds;
    console.log(breeds)


    const breedslist = breeds.map((breeds)=>
        <option value={breeds}>{breeds}</option>
    );

    const handleChange = () =>{
        const ele = document.getElementById( "pulldownBreed" ) ;
        setSelectedBreed(ele.value)
    }

    const[selectedBreed,setSelectedBreed]= useState()
    console.log("今選ばれてる",selectedBreed)

    return　(
        <React.Fragment>
            <select id="pulldownBreed" onChange={handleChange}>
                <option value="">-</option>
                {breedslist}
            </select>
        </React.Fragment>
    )
}