import React, { useContext } from 'react'
import FormAddSprint from "./FormAddSprint";
import FormAddProject from "./FormAddProject";
import FormAddTask from "./FormAddTask";
import { AppContext } from '../context/AppContext';

export default function FormModal() {
  const context = useContext(AppContext);
  const handleCloseModal = e => {
    if(e.target.id ==='modal-backdrop') {
      let backdrop = document.getElementById('modal-backdrop')
      backdrop.classList.remove()
      backdrop.classList.add('fade-out')
      setTimeout(() => { context.setShowForms(false) }, 200);
    }
  }
  return context.showForms ?
    <div id='modal-backdrop' onClick={handleCloseModal} className='fade-in'>
          <div id='modal' className='pop-in'>
            <FormAddProject />
            <FormAddSprint />
            <FormAddTask />
          </div> 
    </div> : null

}
