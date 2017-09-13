import React from 'react';
import {observer} from "mobx-react";

const Note = observer(({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
));

export default Note;