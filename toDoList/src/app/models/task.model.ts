export interface ITask {
  title: string;
  complete: boolean;
  isEditing: boolean;
}

export class TaskModel {
  title: string;
  complete: boolean;
  isEditing: boolean;

  constructor(title, complete = false, isEditing = false) {
    this.title = title;
    this.complete = complete;
    this.isEditing = isEditing;
  }
}
