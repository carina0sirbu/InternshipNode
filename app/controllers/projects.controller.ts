import {Request, Response, Router} from "express";
import { Project } from '../types/Project'
import { Initialize } from "../initialize/Initialize";
import {Story, Task} from "../types";
import * as bodyParser from 'body-parser';

const router: Router = Router();

router.get("/", (request: Request, response: Response) => {

  let projects: Project[] = Initialize.initializeProjects();

  response.json(projects);

});


router.get("/:projectId", ((req, res) => {

  const projectId = req.params.projectId;

  res.json(findProjectById(projectId));

}));

router.get("/:projectId/stories", ((req, res) => {

  const projectId = req.params.projectId;
  const project = findProjectById(projectId);
  res.json(project.stories);

}));

router.get("/:projectId/stories/:storyId", ((req, res) => {

  const projectId = req.params.projectId;
  const storyId = req.params.storyId;

  res.json(findProjectById(projectId).stories.filter(s => s.id == storyId)[0]);

}));

router.post("/:projectId/stories/:storyId/finished", ((req, res) => {

  const projectId = req.params.projectId;
  const storyId = req.params.storyId;
  const status = req.body.finished;

  const project: Project = findProjectById(projectId);
  const story: Story = project.stories.filter(s => s.id == storyId)[0];

  story.task.forEach(task => {

    task.finished = status;
  });

  story.finished = status;

  const tasks: Task[] = story.task.map(task => task);

  res.json( {
    story,
    tasks
  });

}));

router.post("/:projectId/stories/delete", ((req, res) => {

  const projectid = req.params.projectId;
  const storyId = req.body.storyId;

  console.log(storyId);

  const project: Project = findProjectById(projectid);
  const story: Story = project.stories.filter(s => s.id == storyId)[0];

  project.removeStory(story);

  res.json(project);

}));

function findProjectById (projectId: number) {

  return Initialize.initializeProjects().filter(p => p.id == projectId)[0];
}

export const ProjectController: Router = router;