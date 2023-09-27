import {
  ListContainer,
  NameIcon,
  TitleAndNotes,
  TitleNotes,
  TextNotes,
} from './styledComponents'

const NoteItem = props => {
  const {NoteItemDetails} = props
  const {title, takeNotes} = NoteItemDetails

  return (
    <ListContainer>
      <NameIcon>{title.slice(0, 1).toUpperCase()}</NameIcon>
      <TitleAndNotes>
        <TitleNotes>{title}</TitleNotes>
        <TextNotes>{takeNotes}</TextNotes>
      </TitleAndNotes>
    </ListContainer>
  )
}

export default NoteItem
