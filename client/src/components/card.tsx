import './card.css';

function Card(props : any){
    const classes = 'card '
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;