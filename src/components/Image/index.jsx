import { ImageWrapper } from "./Image.css";


export default function Image(image){
    return <ImageWrapper src={image.source}/>
}