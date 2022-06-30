import React from 'react';
import './App.css';
import DnaForm from './components/dna-form';
import DnaList from './components/dna-list';

const axios = require('axios').default;

function App() {

    const dnas = [
        {
            "id": 1,
            "dna": "ACTGACTG",
            "created_at": "2022-06-26T16:15:34.558Z"
        },
        {
            "id": 2,
            "dna": "ACTGACTGACTGACTG",
            "created_at": "2022-06-26T16:15:41.844Z"
        }        
    ]
    
      return (
        <div className='center'>      
          <DnaForm />
          <DnaList dnas={dnas}/>
        </div>
      );

//     const baseURL = 'http://localhost:3000';
//     const [dnas, setDnas] = React.useState('');

//     // React.useEffect(() => {
//     //     fetch('/dna')
//     //         .then((res) => res.json())
//     //         .then(({ message }) => setMessage(message))
//     //         .catch(console.error);
//     // }, []);


//   React.useEffect(() => {
//         axios.get(baseURL + '/dna').then((response : any) => {
//             setDnas(response.data);
//         });
//     }, []);

//     return (
//         <div className="App">
//             <header className="App-header">
                               
//             </header>

        
//         </div>
//     );
}

export default App;
