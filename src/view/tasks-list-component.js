import { AbstractComponent } from "../framework/view/abstract-component.js";
import {StatusLabel } from '../const.js';

function createTasksListTemplate(status) {
    return (
      
      `
              <ul class="${status}">
                <label>${StatusLabel[status]}</label>
              </ul>

    `

      );
}

export default class tasksListComponent extends AbstractComponent{
constructor({status}){
  super();
  this.status=status;
}

get template() { 
  return createTasksListTemplate(this.status);
  }
}
