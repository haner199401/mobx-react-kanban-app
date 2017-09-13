import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Notes from './Notes';


@inject('store')
@observer
export default class App extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const {notes} = this.store;
        return (
            <div>
                <button
                    className="addNote"
                    onClick={() => this.store.addNote()}>+
                </button>
                <Notes
                    notes={notes}
                    onDeleteBtnClick={this.onDeleteBtnClick}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={(id, task) => this.store.editNote(id, task)}/>
            </div>
        );
    }

    activateNoteEdit = (id) => {
        this.store.activeNote(id);
    }


    onDeleteBtnClick = (id, e) => {
        e.stopPropagation();
        this.store.removeNode(id);
    }

}