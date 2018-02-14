import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import {AddSubTaskComponent} from "../addSubTask-form/addSubTask-form.component";

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css']
})

export class TasksComponent implements OnInit{
  @Input() index = -1;

  @Input() tasks: Array<TaskModel> = [];

  editingIndex = null;
  subTaskEditing: Array<number> = [];

  ngOnInit() {
    if (this.index === -1 && this.tasks.length === 0) {
      this.tasks = this.taskService.getTasks();
    }
  }

  constructor(private taskService: TaskService) {}

  toggle(index: number) {
    if (this.tasks[index].subTasks.every((subTask: TaskModel) => subTask.complete)) {
      this.tasks[index].complete = !this.tasks[index].complete;
    } else { this.tasks[index].complete = false; }
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  edit(index: number, editedTask: string) {
    if (editedTask) {
      this.tasks[index].title = editedTask;
      this.editingIndex = null;
    }

    this.toggle(index);
  }

  startPushingSubTasks(index) {
    this.toggle(index);

    if (this.subTaskEditing.indexOf(index) !== -1) {
      this.subTaskEditing.splice(this.subTaskEditing.indexOf(index), 1);
    } else { this.subTaskEditing.push(index); }
  }

  startEditing(index: number) {
    this.toggle(index);
    this.editingIndex = index;
  }
}