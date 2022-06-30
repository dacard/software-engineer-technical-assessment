import DnaItem from "./dna-item";
import './dna-list.css';
import Card from './card';
import React, { useEffect } from "react";
import axios from "axios";

function DnaList(props:any){

    const baseURL = 'http://localhost:3000';

    const [search, setSearch] = React.useState('');
    const [distance, setDistance] = React.useState(5);
    const [dnas, setDnas] = React.useState([]);
    const [message, setMessage] = React.useState('');

    const searchDNA = (dna : string, dist : number)  => 
        axios
          .post(baseURL + '/dna/search', {
            dna : dna,
            distance : dist
          })
          .then((response) => {            
            setDnas(response.data);
          })
            .catch((error) => {
                console.log(error)
                setMessage(error.response.data)
            })
          ;
        
    useEffect(() => {                
        if(!distance || distance < 0){            
            setDistance(0);
        }
        if(message){            
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    })

        
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         searchDNA(search.search);
    //     }, 1000)
    
    //     return () => clearTimeout(delayDebounceFn)
    //     }, [search])
        
    return(
        
        <div className="card">
            <h2>DNA Search</h2>
            <div className="">

                <div className="container column margin-bottom-20   ">
                    DNA:                
                    <input autoFocus            
                        type='text'
                        autoComplete='off'
                        className='custom-input'
                        value={search}
                        placeholder='Search your dna here...'
                        onChange={(e) => setSearch(e.target.value.toUpperCase())} />
                </div>
                
                <div className="container column">
                    Max Levenshtein distance
                    <input
                        type='number'            
                        autoComplete='off'
                        placeholder="Only positive intergers"
                        min="0"                                       
                        className='custom-input input-number margin-bottom-20'
                        onChange={(e) => setDistance(parseInt(e.target.value))} />
                </div>

                <div className="warning">
                    {message}
                </div>
            </div>
            
            <button 
                className="custom-button"
                onClick={() => searchDNA(search, distance)}>Search</button>
            
            <h3>Result</h3>
            <div className="dnas" >   
                {dnas.map( (res : any, i : number) => <DnaItem key={i} data={res}></DnaItem>)}
            </div>
        </div>    
    )
}

export default DnaList; 