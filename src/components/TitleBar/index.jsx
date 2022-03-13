import { TitleBarWrapper } from "./TitleBar.css"

export default function TitleBar({gloss, setGloss}){
    return (
        <TitleBarWrapper>

        
        <h1>Ashley Shaw</h1>
        {gloss ? <><p>Welcome to my portfolio</p> </>:<><p>How do!</p></>}
        </TitleBarWrapper>
    )
}