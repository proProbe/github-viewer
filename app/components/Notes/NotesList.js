import React from 'react'

const NotesList = ({notes}) => {
	return (
		<ul className="list-group">
		{notes.map((note, index) => (
			<li className="list-group-item" key={index}>{notes}</li>
			))}
		</ul>
		)
}

export default NotesList;

// module.exports = NoteList;