import React, { useContext } from 'react'
import FormAddSprint from "./FormAddSprint";
import FormAddProject from "./FormAddProject";
import FormAddTask from "./FormAddTask";
import { AppContext } from '../context/AppContext';

export default function FormModal() {
  const context = useContext(AppContext);

  return context.showForms ?
        <div id='modal'>
          <FormAddProject />
          <FormAddSprint />
          <FormAddTask />
        </div> : null

}
