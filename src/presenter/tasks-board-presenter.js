import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/tasks-board-component.js';
import {render} from '../framework/render.js';
import { Status, StatusLabel } from '../const.js';
import ClearButtonComponent from "../view/button-delite.js";


export default class TasksBoardPresenter {
 tasksBoardComponent = new TaskBoardComponent();


 constructor({boardContainer, tasksModel}) {
   this.boardContainer = boardContainer;
   this.tasksModel =  tasksModel;
 }

init() {
  this.boardTasks = [...this.tasksModel.getTasks()];
 render(this.tasksBoardComponent, this.boardContainer);   
 for (let i in Status) {
  this.status_title = Status[i];
  const tasksListComponent = new TasksListComponent({status: Status[i]});
     render(tasksListComponent, this.tasksBoardComponent.getElement());
    
     for (let j = 0; j <  this.boardTasks.length; j++) {
         const taskComponent = new TaskComponent({task: this.boardTasks[j]});
         if (this.boardTasks[j].status == this.status_title)
         {
         render(taskComponent, tasksListComponent.getElement());
         }
     }
    }
 this.makeClearButton();
 
}

 makeClearButton() { 
  const basketContainer = document.querySelector(`.${Status.BASKET}`); 
   
  render(new ClearButtonComponent(), basketContainer);
}
}




