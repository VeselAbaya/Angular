export class SubTask {
  title: string;
  complete: boolean;

  constructor(title: string) {
    this.title = title;
    this.complete = false;
  }
}


export class TaskModel {
  id: number;
  title: string;
  subTasks: Array<SubTask>;
  complete: boolean;

  constructor(task: TaskModel) {
    this.id = task.id;
    this.title = task.title;
    this.complete = task.complete || false;
    this.subTasks = task.subTasks || [];
  }
}
