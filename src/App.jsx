import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      content: ''
    };
  }

  handleSaveNote = () => {
    const { title, content } = this.state;
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = { id: Date.now(), title, content };
      this.setState(prevState => ({
        notes: [...prevState.notes, newNote],
        title: '',
        content: ''
      }));
    }
  };

  handleDeleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleDownloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([`Title: ${note.title}\nContent: ${note.content}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  render() {
    const { notes, title, content } = this.state;

    return (
      <>
        <center><div className="name"><b>Notes App</b></div></center>
        <div className="app">
          <div className="sidebar">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => this.setState({ content: e.target.value })}
            ></textarea>
            <button className="save-button" onClick={this.handleSaveNote}>Save</button>
          </div>
          <div className="notes-container">
            {notes.map((note) => (
              <div key={note.id} className="note">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button className="delete-button" onClick={() => this.handleDeleteNote(note.id)}>Delete</button>
                <button className="download-button" onClick={() => this.handleDownloadNote(note)}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
