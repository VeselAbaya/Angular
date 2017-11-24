export interface ITask {
  title: string;
  complete: boolean;
  subTasks: Array<ITask>;
}

export class TaskModel {
  title: string;
  subTasks: Array<TaskModel>;
  complete: boolean;

  constructor(title: string) {
    this.title = title;
    this.complete = false;
    this.subTasks = [];
  }
}
