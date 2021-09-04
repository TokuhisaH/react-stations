// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { DogListContainer } from './DogListContainer';

export const BreedsSelect = (props) =>{
    
    const breeds =props.breeds;
    const imageList = props.imageList;
    console.log("imagelist",imageList)

    const breedslist = breeds.map((breeds)=>
        <option key={breeds} value={breeds} text={breeds}>{breeds}</option>
    );

    const image = imageList.map((imageList)=>
        <div>
        <img src={imageList}></img>
        </div>
    );

    return　(
        <React.Fragment>
            <select value={props.value} onChange={props.handleChange}>
                {breedslist}
            </select>
            <div class="button_wrapper">
            <button onClick={props.onButtonClick}>表示する</button>
            </div>
            {image}
        </React.Fragment>
    )
}