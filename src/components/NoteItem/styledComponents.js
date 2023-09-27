import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 3px 2px 2px 3px #e83f33;
  background-size: cover;
  margin: 10px;
  padding: 5px;
`
export const NameIcon = styled.p`
  border-radius: 20px;
  background-image: radial-gradient(#68cede, #ed42b4, #cde36b);
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const TitleAndNotes = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleNotes = styled.h1`
  font-size: 25px;
  color: #334155;
  font-family: 'serif';
`
export const TextNotes = styled.p`
  font-size: 18px;
  color: #334155;
  font-family: 'serif';
`
