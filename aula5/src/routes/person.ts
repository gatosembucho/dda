import express, { Request, Response, Router } from 'express';
import PersonControler from '../controllers/personControler';
const router: Router = express.Router();

router
   .get('/usuarios', PersonControler.getUsers)
    .post('/usuarios', PersonControler.createUser)
    .put('/:id', PersonControler.updateUser)
    .delete('/:id', PersonControler.DeleteUser)
    

   
export default router;