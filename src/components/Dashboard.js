import React from 'react';
import Note from './Note';
import Sidebar from './Sidebar'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      notes: [
        {
          title: "Insert your title",
          body: "Insert your body"
        }
      ],
      currentNoteIndex: 0
    }
  }

  handleTitleChange(event) {
    let newNotesArray = this.state.notes.slice()
    let newNote = Object.assign({}, this.state.notes[this.state.currentNoteIndex])
    newNote.title = event.target.value
    newNotesArray[this.state.currentNoteIndex] = newNote

    this.setState({
      notes: newNotesArray
    })
  }

  handleBodyChange(event) {
    let newNotesArray = this.state.notes.slice()
    let newNote = Object.assign({}, this.state.notes[this.state.currentNoteIndex])
    newNote.body= event.target.value
    newNotesArray[this.state.currentNoteIndex] = newNote

    this.setState({
      notes: newNotesArray
    })
  }

  addNewNote() {

    let newNoteArray = this.state.notes.slice()
    let newNote = { title: 'Insert your title', body: 'Insert your body' }
    newNoteArray.push(newNote)
    let newNoteIndex = newNoteArray.length - 1

    this.setState({
      notes: newNoteArray,
      currentNoteIndex: newNoteIndex,
    })
  }

  changeCurrentIndex(index) {
    this.setState({
      currentNoteIndex: index
    })
  }

  render() {
    return (
      <div className="dashboard">
        <div className="title">
          <h1>My Notetaking App</h1>
          <button onClick={() => this.addNewNote()} >Add New Note</button>
        </div>
        <Sidebar
          notes={this.state.notes}
          changeCurrentIndex={(index) => this.changeCurrentIndex(index)}
        />
        <Note
          note={this.state.notes[this.state.currentNoteIndex]}
          handleTitleChange={(e) => this.handleTitleChange(e)}
          handleBodyChange={(e) => this.handleBodyChange(e)}
        />
      </div>

    )
  }
}

export default Dashboard;
