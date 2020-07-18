import { Router } from '@baseClasses';
import {
  CreateUserController,
  RetrieveUserController,
  ListUserController,
  UpdateUserController,
  DeleteUserController,
} from '../controllers/UserController';

export class UserRouter extends Router {
  controllers = [
    new CreateUserController(),
    new RetrieveUserController(),
    new ListUserController(),
    new UpdateUserController(),
    new DeleteUserController(),
  ];
}
