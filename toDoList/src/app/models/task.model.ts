export interface ITask {
  title: string;
  complete: boolean;
}

export class TaskModel {
  title: string;
  complete: boolean;

  constructor(title, complete = false) {
    this.title = title;
    this.complete = complete;
  }
}
