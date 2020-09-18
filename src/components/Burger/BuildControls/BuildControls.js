import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'}
]

const buildControls = (props) => {
    
    return (
            <div className={classes.BuildControls}>
                <p>Price: <strong>{props.price}</strong></p>
                {controls.map(ctrl => {
                    return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)} 
                        diabled={props.disabled[ctrl.type]}/>
                })}
                <button 
                className={classes.OrderButton}
                disabled={!props.purchasable} 
                onClick={props.ordered} >ORDER NOW</button>
            </div>
    )}

export default buildControls;