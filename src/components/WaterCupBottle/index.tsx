import { CupWater } from "../CupWater"
import { WaterBottle } from "../WaterBottle"
import { Text } from "../Text"
import { useState } from "react"


type WaterCupBottleType = "WaterCupBottle1"
interface WaterCupBottleProps {
    type?: WaterCupBottleType
  
}

export const WaterCupBottle = ({  type = "WaterCupBottle1" }: WaterCupBottleProps) => {
  const [aguaMililitros, setAguaMililitros] = useState(0)
  const onClickwatercup =(active:boolean)=>{
    if (active == true) {
      //si es active
      //sumar 250
      setAguaMililitros(aguaMililitros + 250)
    } 
    if (active == false) {
      //si no es active
      //restart
      setAguaMililitros(aguaMililitros - 250)
    } 

  }
  
  return (<>
        <div className={`WaterCupBottle ${type}`}>
        <Text>
          Drink Water
        </Text>
        <Text type='text1'>
          Goal: 2 Liters
        </Text>
        <WaterBottle mililitros={aguaMililitros} />
        <Text type="text4">
          Select how many glasses of water that you have drank
        </Text>
        <CupWater onClickWater={onClickwatercup}/>
        </div>
    </>)
}