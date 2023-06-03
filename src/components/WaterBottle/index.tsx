
import { CSSProperties } from "react"
import { Text } from "../Text"

type WaterBottleType = "WaterBottle" | "WaterBottle"
interface WaterBottleProps {
    type?: WaterBottleType
    mililitros?: number
}

export const WaterBottle = ({ mililitros = 0, type = "WaterBottle" }: WaterBottleProps) => {
    //    0-2000
    return (<>
        <div className={`WaterBottle ${type}`}
            style={{
                ["--porcentaje"]:`${ mililitros / 20}%`
            } as CSSProperties}
        >
            <Text type="text2">
                {mililitros}ml
            </Text>
            <Text type="text3">
                Remained
            </Text>
        </div>
    </>)

}