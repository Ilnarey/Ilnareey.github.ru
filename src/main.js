import HeaderComponent from './view/header-component.js';
import FormComponent from './view/form-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import {render, RenderPosition} from './framework/render.js';
import TasksModel from './model/task-model.js';

const bodyContainer= document.querySelector('.header');
const formContainer= document.querySelector('.new_task');
const taskBlockContainer= document.querySelector('.tasks');

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: taskBlockContainer, 
    tasksModel,
});


render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormComponent(), formContainer, RenderPosition.AFTERBEGIN);
tasksBoardPresenter.init();