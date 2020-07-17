import { Router } from '@baseClasses';
import {
  CreateUserController,
  RetrieveUserController,
} from '../controllers/UserController';

class UserRouter extends Router {
  controllers = [new CreateUserController(), new RetrieveUserController()];
}

export default [new UserRouter('/user')];
