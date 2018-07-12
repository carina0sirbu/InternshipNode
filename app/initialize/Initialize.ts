import * as Types from '../types'

export class Initialize {

  static initializeTasks(): Array<Types.Task> {

    const tasks: Array<Types.Task> = [new Types.Task(1, "First", false,2),
                                new Types.Task(2, "Second", false,1),
                                new Types.Task(3, "Third", false,2)];

    return tasks;
  }


  static initializeStories(): Array<Types.Story> {

    const stories: Array<Types.Story> = [new Types.Story(1, "Internship", false, "Carina", this.initializeTasks()),
                                  new Types.Story(2, "Internship", true, "Diana", this.initializeTasks()),
                                  new Types.Story(3, "College", true, "Darius", this.initializeTasks())];

    return stories;
  }

  static initializeProjects(): Array<Types.Project> {

    const projects: Array<Types.Project> = [new Types.Project(2, "Internship", this.initializeStories(), false),
                                      new Types.Project(1, "College", this.initializeStories(), false),
                                      new Types.Project(3, "Further Development", this.initializeStories(), false)];

    return projects;
  }

  static initializeEntities(): Array<Types.Entity> {

    const entities: Array<Types.Entity> = [new Types.Entity(1, "Customers"),
                                      new Types.Entity(2, "Users"),
                                      new Types.Entity(3, "Admins")];

    return entities;
  }
}

export class Initialize2 {

}