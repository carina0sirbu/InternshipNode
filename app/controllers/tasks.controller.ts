import {Router, Response, Request} from "express";
import { Initialize } from "../initialize/Initialize";
import {Project, Story} from "../types";

const router: Router = Router();

router.get("/", (request: Request, response: Response) => {

  response.json(Initialize.initializeTasks());

});


router.get("/solveTask", (req, res) => {

  console.log(req.body);

  const projectId =  req.query.projectId;
  const storyId = req.query.storyId;

  let project: Project = Initialize.initializeProjects().filter(project => project.id == projectId)[0];

  let story: Story = project.stories.filter(story => story.id == storyId)[0];

  story.task.forEach(task => {
     if(task.isFinished() == false){
       task.finished = true;
     }
   });

  story.finished = true;

  res.json(story);


});

router.post("displayTasks", ((req, res) => {



}));

export const TaskController: Router = router;