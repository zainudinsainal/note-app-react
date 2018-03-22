import React from 'react';

class Sidebar extends React.Component {
  renderNotes(array) {
    if (array.length=== 0) {
      return(
        <div>No Notes Yet!</div>
      )
    } else {
      return array.map((note, index) => {
        return (
          <li onClick={() => this.props.changeCurrentIndex(index)}>
            <strong>{note.title}</strong>
          </li>
        )
      })
    }
  }

  render() {
    return (
      <ul className="sidebar">
        {this.renderNotes(this.props.notes)}
      </ul>
    )
  }
}

export default Sidebar;
