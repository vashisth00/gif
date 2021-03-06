/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY

const GetGif = () => {
    const [gif, setGif] = useState('');
    const fetchGif = async () =>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
        //promise
        const {data } = await axios.get(url);
        console.log(data);

        const imageSrc = data.data.images.fixed_width.url;
        setGif(imageSrc);
    } 

    useEffect(()=>{
        //async arrow function
  

        fetchGif();
    },[]);

    const handleClick = () => {
        fetchGif();
 }
    return(
        <>
        <div className="container-fluid">
        <h3>Random</h3>
           <img width={350} src={gif}></img>
           <button onClick={handleClick} type="button" className="btn btn-outline-dark">Generate</button>
        </div>
        </>
    )

}

export default GetGif;