
// Assign router to the express.Router() instance
import {Request, Response, Router} from "express";

const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {

  res.send('<h1 style="color: red">Hello, World!</h1>');

});

router.get('/:userId', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  const name = req.params.userId;

  /**
   * {
   *     name: '',
   *     secondName: ''
   * }
   */

  // Greet the given name
  res.send(`Hello, ${name}`);
});


router.get('/:userId/posts', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  console.log('Query Request ', req.query);
  console.log('Path Params ', req.params);


  const name = req.params.name;
  const age =  req.query.age;

  /**
   * {
   *     name: '',
   *     secondName: ''
   * }
   */

  // Greet the given name
  res.send(`Hello, ${name} - age: ${age}`);
});


router.get('/:userId/posts/:postId', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  console.log('Query Request ', req.query);
  console.log('Path Params ', req.params);


  const name = req.params.name;
  const age =  req.query.age;

  /**
   * {
   *     name: '',
   *     secondName: ''
   * }
   */

  // Greet the given name
  res.send(`Hello, ${name} - age: ${age}`);
});



// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;
