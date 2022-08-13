import React, {useState} from "react";
import colorData from "../color-data.json"
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import {v4} from "uuid"

export default function App(){
    const [colors, setColors] = useState(colorData)
    return (
        <>
            <AddColorForm
                onNewColor={(title, color)=>{
                    const newColor = [
                        ...colors,
                        {
                            id:v4(),
                            rating:0,
                            title,
                            color
                        }
                    ];
                    setColors(newColor)
                }}

            />
            <ColorList
                colors={colors}
                    onRateColor={(id,rating)=>{
                        const newColor = colors.map(color => color.id===id?{...color,rating}:color)
                        setColors(newColor)
                    }
                }
                    onRemoveColor={id=>{
                        const newColors = colors.filter(color => color.id !==id);
                        setColors(newColors)
                    }
                }/>
        </>
    )
}
