import React from 'react';
import {observer} from "mobx-react";

import Note from './Note';
import Editable from './Editable';

const Notes = observer(({
                            notes,
                            onNoteClick = () => {
                            },
                            onEdit = () => {
                            },
                            onDeleteBtnClick = () => {
                            }
                        }) =>
    (<ul className="notes">
            {
                notes.map((note) =>
                    <li key={note.id}>
                        <Note
                            className="note"
                            onClick={() => onNoteClick(note.id)}>

                            <Editable
                                className="editable"
                                isEdit={note.isEdit}
                                value={note.task}
                                note={note}
                                onEdit={(task)=>onEdit(note.id,task)}/>

                            <button
                                className="delete"
                                onClick={onDeleteBtnClick.bind(null, note.id)}>x
                            </button>

                        </Note>
                    </li>
                )
            }
        </ul>
    ));


export default Notes;










    