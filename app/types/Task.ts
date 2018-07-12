import {Entity} from "./Entity";

export class Task extends Entity {

  private _finished: boolean;
  private _priority: number;

  constructor(id: number, title: string, finished: boolean, priority: number) {

    super(id, title);
    this._finished = finished;
    this._priority = priority;
  }

  isFinished(): boolean {
    return this._finished;  // this._finished
  }

  set finished(finished: boolean) {
    this._finished = finished;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(priority: number) {
    this._priority = priority;
  }
}