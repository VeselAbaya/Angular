export class TaskModel {
  title: string;
  subTasks: Array<TaskModel>;
  complete: boolean;

  constructor(task: TaskModel) {
    this.title = task.title;
    this.complete = task.complete || false;
    this.subTasks = task.subTasks || [];
  }
}
