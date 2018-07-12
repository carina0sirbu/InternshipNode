import {Router} from "express";
import {Initialize} from "../initialize/Initialize";
import {Story} from "../types";

const router: Router = Router();

router.get("/", ((req, res) => {

  res.json(Initialize.initializeStories());

}));

router.get("/:storyId", ((req, res) => {

  const storyId = req.params.storyId;

  let story: Story = findStoryById(storyId);

  res.json(story);

}));

router.get("/:storyId/tasks", ((req, res) => {

  const storyId = req.params.storyId;

  res.json(findStoryById(storyId).task);

}));

function findStoryById (storyId: number): Story {

  return Initialize.initializeStories().filter(s => s.id == storyId)[0];
}

export const StoriesController: Router = router;