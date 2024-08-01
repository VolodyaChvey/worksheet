import { useContext } from "react"
import { DocumentContext } from "../context"

export default function PagePB(){
    const document = useContext(DocumentContext)
    const {size,orientation}= document.pageDtoList[0]
    return(<><p>{size} {orientation}</p> </>)
}