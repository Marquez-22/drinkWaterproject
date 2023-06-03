import { ReactNode } from "react"

type TextType = "text" | "text1"|"text2"|"text3"|"text4"|"text5"
interface TextProps {
    type?: TextType
    children: ReactNode
}

export const Text = ({ children, type = "text" }: TextProps) => {
    return (<>
        <div className={`text ${type}`}>
            {children}
            
        </div>
    </>)

}