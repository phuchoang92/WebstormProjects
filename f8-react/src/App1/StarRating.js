import {FaStar} from "react-icons/fa";
import React from "react";

const Star = ({selected = false, onSelect = f => f})=>(
    <FaStar color={ selected? "red":"grey"} onClick={onSelect} />
)

const createArray = length => [...Array(length)]

export default function StarRating({totalStar = 5, selectedStar=0, onRate = f =>f}){
    return (
        <>
            {createArray(totalStar).map((n,i)=>
                <Star
                    key={i}
                    selected={(selectedStar>i)}
                    onSelect={()=>onRate(i+1)}
                />)
            }
            <p>You rate this {selectedStar} of 5 star</p>
        </>
    )
}