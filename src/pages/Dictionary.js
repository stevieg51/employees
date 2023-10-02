import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary () {

    const [word, setWord] = useState(' ');

    //use navigate allows us to force the user to navigate to a sepcific page/ url
    const navigate = useNavigate();


    return (
        <>
         <input className='  m-4' type='text' onChange={(e) => {
            setWord(e.target.value);
         }} ></input>

         <button onClick={( ) => {
            navigate('/definition/' + word)
         }}>Search</button>
        </>
    )
}