import express, { Request, Response, Router } from 'express';
import PersonControler from '../controllers/personControler';
import { validateDelete, validateRegister, validateUpdate } from '../middlewares/personMiddleware';
const router: Router = express.Router();

router
    .get('/usuarios', PersonControler.getUsers)
    .post('/usuarios', validateRegister,PersonControler.createUser)
    .put('/:id', validateUpdate, PersonControler.updateUser)
    .delete('/:id',validateDelete, PersonControler.DeleteUser)
    

   
export default router;