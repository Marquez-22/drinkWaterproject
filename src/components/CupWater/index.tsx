
import { Water } from "../Water"

type CupWaterType = "CupWater" | "CupWater1"
interface CupWaterProps {
    type?: CupWaterType
    mililitros?: number
    onClickWater?: (active:boolean) => void
}

export const CupWater = ({ onClickWater,mililitros = 0, type = "CupWater" }: CupWaterProps) => {

    return (<>
        <div className={`CupWater ${type}`}>
            <Water
                mililitros={250}
                onClick={onClickWater}

            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />
            <Water
                mililitros={250}
                onClick={onClickWater}
            />


        </div>
    </>)

}