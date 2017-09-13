import React from 'react';
import classnames from 'classnames';


const Editable = ({isEdit, value, onEdit, className, note,...props}) =>

    (isEdit ? <Editable.Edit value={value}
                             onEdit={onEdit}
                             note={note}
                             className={className}/>
        :
        <Editable.Value className={className}
                        value={value}/>);

class Edit extends React.Component {
    render() {

        const {className, value,} = this.props;

        return (<input
            type="text"
            className={classnames('edit', className)}
            autoFocus={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}/>);
    }

    checkEnter = (e) => {
        e.key === 'Enter' && this.finishEdit(e);
    }

    finishEdit = (e) => {
        this.props.onEdit && this.props.onEdit(e.target.value || 'new task');
    }
}

Editable.Edit = Edit;
Editable.Value = ({value, className}) => (<span className={classnames('value', className)}>{value}</span>);

export default Editable;