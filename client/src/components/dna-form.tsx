import './dna-form.css';
import Card from './card';
import axios from "axios";
import React, { useEffect } from "react";

function DnaForm(props:any){
    
    const baseURL = 'http://localhost:3000';

    //useState is a hook that lets you add react state to your component.
    const [dna, setDna] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [failMessage, setFailMessage] = React.useState('');


    //submit form using axios
    const createDNA = (_dna : string) => {
        
        axios.post(baseURL + '/dna', {
            dna : dna
        }).then((response) => {
            setSuccessMessage("DNA created successfully")     
        }).catch((error) => {
            setFailMessage(error.response.data)
        })
    }

    useEffect(() => {                
        
        if(failMessage){            
            setTimeout(() => {
                setFailMessage('');
            }, 3000);
        }

        if(successMessage){            
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    })

    return(
        <Card>            
            <h2>Create DNA</h2>            
            <div className='display-flex'>                    
                <input 
                    className='custom-input width-100'
                    type="textarea" 
                    placeholder="Enter DNA"
                    value={dna.toUpperCase()} 
                    onChange={e => setDna(e.target.value)} />                    
                <button 
                    className='custom-button'
                    onClick={() => createDNA(dna)}>Create</button>
            </div>            
            <div className="success">
                {successMessage}
            </div>
            <div className="warning">
                {failMessage}
            </div>
        </Card> 
    )
}

export default DnaForm;