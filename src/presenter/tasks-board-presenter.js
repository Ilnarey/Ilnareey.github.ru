import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/tasks-board-component.js';
import {render} from '../framework/render.js';
import { Status } from '../const.js';
import ClearButtonComponent from "../view/button-delite.js";


export default class TasksBoardPresenter {
  #boardContainer=null;
  #tasksModel=null;
  #boardTasks=[];
  #tasksBoardComponent = new TaskBoardComponent()

 constructor({boardContainer, tasksModel}) {
   this.#boardContainer = boardContainer;
   this.#tasksModel =  tasksModel;
 }

init() {
  this.#boardTasks = [...this.#tasksModel.getTasks()];
 render(this.#tasksBoardComponent, this.#boardContainer);  

 for (let i in Status) {
  this.status_title = Status[i];
  const tasksListComponent = new TasksListComponent({status: Status[i]});
    render(tasksListComponent, this.#tasksBoardComponent.element);
    if (tasksListComponent.length===0){
      render(new SubmitTaskComponent(), tasksListComponent.element());
    }
    else{
      for (let j = 0; j <  this.#boardTasks.length; j++) {
        this.#renderTask(
          this.#boardTasks[j],
          tasksListComponent.element,
          this.status_title)
      }
    }
  }
this.makeClearButton();
}
#renderTask(task, container, status_title) {
  const taskComponent = new TaskComponent({ task: task });
  if (task.status == status_title) {
    render(taskComponent, container);
  }
}  
makeClearButton() {
const basketContainer = document.querySelector(`.${Status.BASKET}`);
render(new ClearButtonComponent(), basketContainer);
}
}


