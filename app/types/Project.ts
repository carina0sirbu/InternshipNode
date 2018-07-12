import { Story } from "./Story";
import { Entity } from "./Entity";

export class Project extends Entity {

  private _archived: boolean;
  private _stories: Array<Story>;

  constructor(id: number, title: string, stories: Array<Story>, archived: boolean) {

    super(id, title);
    this._stories = stories;
    this._archived = archived;
  }

  isArchived(): boolean {
    return this._archived;
  }

  set archived(archived: boolean) {
    this._archived = archived;
  }

  addStory(story: Story): void {
    this._stories.push(story);
  }

  get stories(): Array<Story> {
    return this._stories;
  }

  removeStory(story: Story): void {
    let index = this._stories.indexOf(story);
    this._stories.splice(index, 1)
  }
}