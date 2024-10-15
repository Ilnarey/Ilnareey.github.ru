import {createElement} from '../framework/render.js';
import {StatusLabel } from '../const.js';

function createTasksListTemplate(status) {
    return (
      
      `
              <div class="${status}">
               <ul class="list_${status}">
                 <label>${StatusLabel[status]}</label>
               </ul>
              </div>

    `

      );
}

export default class tasksListComponent {
constructor({status}){
  this.status=status;
}

  getTemplate() {
    return createTasksListTemplate(this.status);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}