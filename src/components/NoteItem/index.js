
import {renderNotYetViewContainer,Image, NotYetHeading, NotYetPara} from "./styledComponents"

const NoteItem =(props)=>{
    const {NoteItemDetails} = props
    const {title,takeNotes} = NoteItemDetails 
     
    const renderNotYetView=()=>{
       return(
         <renderNotYetViewContainer>
            <Image src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" alt="notes empty"/>
            <NotYetHeading>No Notes Yet</NotYetHeading>
            <NotYetPara>Notes you add will appear here</NotYetPara>
        </renderNotYetViewContainer>
       )
        
        const renderListView =()=>{
            return(
                
            )
        }


    }


    return(

    )
}

export default NoteItem