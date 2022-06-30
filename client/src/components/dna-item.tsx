
import './dna-item.css';
import Card from './card';
import moment from 'moment';


function DnaItem(props : any){
    
    const dateFormat = (date : any) => moment(new Date(date)).utc().format('MMMM Do YYYY, h:mm:ss a');
        
    return (
        <div className="dna-item">            
            <div className="container column width-100">                  
                <div className='container row width-100 space-between'>
                    <span>
                    Levenshtein distance: {props.data.distance}
                    </span>    
                    <span>
                        {dateFormat(new Date(props.data.dna.created_at))}                
                    </span>
                </div>
                
                <p>{props.data.dna.dna}</p> 
                
            </div>
        </div>
    )
}

export default DnaItem;