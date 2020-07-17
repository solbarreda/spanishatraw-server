import { BaseController } from '@baseClasses';
import { httpStatus, MethodsEnum } from '@interfaces';
import { User } from '@models';

class CreateUserController extends BaseController {
  mMethod = MethodsEnum.POST;
  mPath = '/';

  controllerMethod = async () => {
    const user = new User();
    user.firstName = this.body.firstName;
    user.lastName = this.body.lastName;
    user.age = this.body.age;
    user.email = this.body.email;
    await user.save();
    this.success(httpStatus.CREATED, user);
  };
}

class RetrieveUserController extends BaseController {
  mMethod = MethodsEnum.GET;
  mPath = '/:id';

  controllerMethod = async () => {
    const id = this.req.params['id'];
    const user = await User.findOne(id);
    if (user) {
      this.success(httpStatus.OK, user);
    } else {
      this.error(httpStatus.NOT_FOUND, `User with id (${id}) not found.`);
    }
  };
}

// class ListTaskController extends BaseController {
//   mMethod = MethodsEnum.GET;
//   mPath = '/';

//   controllerMethod = async () => {
//     const [tasks, total] = await Task.findAndCount();
//     this.success(httpStatus.OK, { tasks, total });
//   };
// }

// class UpdateTaskController extends BaseController {
//   mMethod = MethodsEnum.PUT;
//   mPath = '/:id';

//   controllerMethod = async () => {
//     const id = this.req.params['id'];
//     const task = await Task.findOne(id);
//     if (task) {
//       task.title = this.body.title || task.title;
//       task.text = this.body.text || task.text;
//       await task.save();
//       this.success(httpStatus.OK, task);
//     } else {
//       this.error(httpStatus.NOT_FOUND, `Task with id (${id}) not found.`);
//     }
//   };
// }

// class DeleteTaskController extends BaseController {
//   mMethod = MethodsEnum.DELETE;
//   mPath = '/:id';

//   controllerMethod = async () => {
//     const id = this.req.params['id'];
//     const task = await Task.findOne(id);
//     if (task) {
//       await task.remove();
//       this.success(httpStatus.OK, { id });
//     } else {
//       this.error(httpStatus.NOT_FOUND, `Task with id (${id}) not found.`);
//     }
//   };
// }

export default {
  CreateUserController,
  // RetrieveTaskController,
  // ListTaskController,
  // UpdateTaskController,
  // DeleteTaskController,
};
