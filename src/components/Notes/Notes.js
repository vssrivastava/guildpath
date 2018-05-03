import React, { Component } from 'react';
import $ from 'jquery';

import {postNotes, putNotes} from '../../services/fetchService';

import './Notes.css';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes
    };
    this.inputValueRef = React.createRef();
    this.addNote = this.addNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  addNote(newNote) {
    postNotes(this.props.participant, {
      noteBody: newNote,
      noteTitle:'',
      target: 'general',
      surveyId: this.props.survey
    }).then(res => {
      const allNotes = { notes: this.state.notes.concat([res]) }
      this.setState(allNotes);
      this.props.onAdd(allNotes);
    });
  }

  editNote(id) {
    $('#note-'+id).addClass('editing');
  }

  cancelEdit(id) {
    $('#note-'+id).removeClass('editing');
  }

  saveNote(id) {
    putNotes(this.props.participant, id, {
      noteBody: $('#note-editable-'+id).val(),
      noteTitle:'',
      target: 'general',
      surveyId: this.props.survey
    }).then(res => {
      const updatedNotes = this.state.notes.map((note, i)=> note.id === id ? res : note);
      this.setState({ notes: updatedNotes});
      this.props.onAdd({ notes: updatedNotes});
      this.cancelEdit(id);
    });
  }

  render() {
    return (
      <div className="participant-notes">
        <h2>Notes</h2>
        <p>Interventions delivered, issues for follow up, notes for the patient, notes for the GP, points for next time</p>
        <div className='all-notes-section'>
        {this.state.notes.length > 0
          ? this.state.notes.map((note, i) => (<div className='participant-note' id={`note-${note.id}`} key={`note-${i}`}>
            <div className='note-body' id={`note-${note.id}`}>{note.noteBody}</div>
            <input type='text' className='note-editable' id={`note-editable-${note.id}`} defaultValue={note.noteBody} />
            <button className='btn-save-note' id={`savenote-${note.id}`} onClick={() => {this.saveNote(note.id)}}>Save</button>
            <button className='btn-cancel-edit' id={`canceledit-${note.id}`} onClick={() => {this.cancelEdit(note.id)}}>Cancel</button>
            <button className='btn-edit-note' id={`editnote-${note.id}`} onClick={() => {this.editNote(note.id)}}><i className="far fa-edit"></i></button>
          </div>))
          : <div className='no-note'>No notes found. Please add notes in the section below.</div>
        }
        </div>
        <div className='add-notes-section'>
          <h3>Add a note</h3>
          <input type='text' id='new-note' className='new-note' placeholder='Note' ref={this.inputValueRef}/>
          <button className="icon-right" onClick={()=>{
            const val = this.inputValueRef.current.value;
            if (!val) return;
            this.inputValueRef.current.value = '';
            this.addNote(val);
          }}>
            Add
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Notes;
