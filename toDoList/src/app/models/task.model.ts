export interface ITask {
  title: string;
  complete: boolean;
  subTasks: Array<ITask>;
}

export class TaskModel {
  title: string;
  complete: boolean;
  subTasks: Array<TaskModel>;

  constructor(title: string, complete = false) {
    this.title = title;
    this.complete = complete;
    this.subTasks = [];
  }
}
