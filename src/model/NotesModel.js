import {observable, action,} from 'mobx';

import uuid from 'uuid';


class Note {

    id = uuid.v4();
    @observable task;
    @observable isEdit = false;

    constructor(task) {
        this.id = uuid.v4();
        this.task = task;
    }
}

export default class NotesModel {

    @observable notes = [];

    @action
    addNote() {
        this.notes.push(new Note('new task'))
    }

    @action
    removeNode(id) {
        this.notes.forEach((note, idx) => (note.id === id && this.notes.splice(idx, 1)));
    }

    @action
    activeNote(id) {
        this.notes.map(note => {
            note.id === id && (note.isEdit = true);
            return note;
        });
    }

    @action
    editNote(id, task) {
        this.notes.map(note => {
            if (note.id === id) {
                note.isEdit = false;
                note.task = task;
            }
            return note;
        })
    }
}