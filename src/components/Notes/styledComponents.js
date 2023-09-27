import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(#73f5ee, #d5edec);
`
export const NotesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const renderNotYetViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotYetHeading = styled.h1`
  font-size: 40px;
  font-family: 'red-serif';
  font-weight: 500;
  color: #334155;
`
export const Image = styled.img`
  height: 50px;
  width: 80px;
`
export const Form = styled.form``
export const NotesList = styled.ul`
  list-style-type: none;
`
export const NotYetPara = styled.p`
  font-size: 40px;
  font-family: 'red-serif';
  font-weight: normal;
  color: #334155;
`

export const NotesBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 5px 3px 5px 3px #dbb54d;
`
export const Input = styled.input`
  color: #1e293b;
  font-size: 18px;
  font-family: 'serif';
  border: 1px transparent;
  margin: 5px;
  padding: 10px;
`
export const AddButton = styled.button`
  color: whitesmoke;
  background-color: #4c63b6;
  height: 30px;
  width: 60px;
  border-radius: 3px;
  margin-left: 92%;
  margin-bottom: 5px;
  font-size: 15px;
  font-family: 'serif';
`

export const NotesHead = styled.h1`
  font-size: 40px;
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #4c63b6;
`
