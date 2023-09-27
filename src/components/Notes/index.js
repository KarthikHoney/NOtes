import {useState} from 'react'

import {
  MainContainer,
  NotesHead,
  NotesSection,
  Input,
  NotesBox,
  AddButton,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [takeNotes, setTakeNotes] = useState('')
  const [notes, setNotes] = useState('')

  const onChangingTitle = event => {
    setTitle(event.target.value)
  }

  const onChangingNotes = event => {
    setTakeNotes(event.target.value)
  }

  return (
    <MainContainer>
      <NotesHead>Notes</NotesHead>
      <NotesSection>
        <NotesBox>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangingTitle}
          />
          <Input
            type="text"
            placeholder="Take Notes"
            value={takeNotes}
            onChange={onChangingNotes}
          />
          <AddButton type="button">Add</AddButton>
        </NotesBox>
      </NotesSection>
    </MainContainer>
  )
}
export default Notes
