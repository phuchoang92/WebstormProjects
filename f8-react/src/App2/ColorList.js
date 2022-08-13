import React from "react";
import {FaTrash} from "react-icons/fa";
import StarRating from "../App1/StarRating";

function Color({id, title, color, rating, onRemove=f=>f, onRate = f=>f}){
    return(
        <section>
            <h1>{title}</h1>
            <button onClick={()=>onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height:50, backgroundColor:color}}/>
            <StarRating selectedStar={rating} onRate={rating => onRate(id, rating)}/>
        </section>
    )
}

export default function ColorList({colors=[], onRemoveColor=f=>f, onRateColor=f=>f}){
    if (!colors.length) return <div>No color list!</div>
    return (
        <div>
            {colors.map(color => <Color key={color.id}{...color}
                                        onRemove={onRemoveColor}
                                        onRate={onRateColor}/>)
            }
        </div>
    )
}