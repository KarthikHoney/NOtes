import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHead,
  NotesSection,
  Input,
  NotesBox,
  AddButton,
  Image,
  renderNotYetViewContainer,
  NotYetHeading,
  NotYetPara,
  NotesList,
  Form,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [takeNotes, setTakeNotes] = useState('')
  const [notes, setNotes] = useState({title: '', takeNotes: ''})
  const [notesList, setNotesList] = useState([])

  const onChangingTitle = event => {
    setTitle(event.target.value)
  }

  const onChangingNotes = event => {
    setTakeNotes(event.target.value)
  }

  const onClickingAdd = event => {
    event.preventDefault()
    const newObject = {
      id: uuidv4,
      title,
      takeNotes,
    }
    setNotes({title, takeNotes})
    setTitle('')
    setTakeNotes('')
    setNotesList(prev => [...prev, newObject])
  }
  const renderNotYetView = () => {
    ;<renderNotYetViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NotYetHeading>No Notes Yet</NotYetHeading>
      <NotYetPara>Notes you add will appear here</NotYetPara>
    </renderNotYetViewContainer>
  }

  return (
    <MainContainer>
      <NotesHead>Notes</NotesHead>
      <NotesSection>
        <NotesBox>
          <Form onSubmit={onClickingAdd}>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={onChangingTitle}
            />
            <Input
              type="text"
              placeholder="Take a Note..."
              value={takeNotes}
              onChange={onChangingNotes}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>
        </NotesBox>
      </NotesSection>
      <NotesList>
        {notesList.length > 0
          ? notesList.map(each => (
              <NoteItem key={each.id} NoteItemDetails={each} />
            ))
          : renderNotYetView()}
      </NotesList>
    </MainContainer>
  )
}
export default Notes
