
import { useState } from "react"
import { Text } from "../Text"

type WaterType = "Water" | "Water"
interface WaterProps {
    type?: WaterType
    mililitros?: number
    onClick?: (active:boolean) => void
}

export const Water = ({ onClick,mililitros = 0, type = "Water" }: WaterProps) => {
const [active, setactive]= useState(false) 
 const smallCup =()=> {
    setactive(!active)
    onClick?.(!active)
}

    
    return (<>
        <div className={`Water ${type} ${active ? "active" : "inactive"}`}
        onClick={smallCup} 
        >
            <Text type="text5">
                {mililitros}
                <br/>ml
               
            </Text>
        </div>
    </>)

}