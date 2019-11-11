import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
        allNotes={this.props.allNotes} 
        handleChosenNote={this.props.handleChosenNote} />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
