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

/*
  El retrieve es para obtener un elemento, por ID.
  El list es para obtener todos on una lista de elementos.
    usas let? -> Porque se reasigna. en la línea 64 se define y en la 78 se reasigna.
    Si ese no fuera el caso, sería una constante (const)
    Es decir se asigna dos veces? -> Sip, la primera vez se define y la segunda se reasigna
  Si te das cuenta, las palabras que se usan para definir las clases o variables
  Son bien descriptivas. Solo con leerlas puedes inferir qué hacen
  */
class RetrieveUserController extends BaseController {
  mMethod = MethodsEnum.GET;
  mPath = '/:userId';

  controllerMethod = async () => {
    const id = this.req.params['userId'];
    const user: User = await User.findOne(id);
    if (user) {
      this.success(httpStatus.OK, user);
    } else {
      this.error(httpStatus.NOT_FOUND, {
        error: `User with id (${id}) not found.`,
      });
    }
  };
}

class ListUserController extends BaseController {
  mMethod = MethodsEnum.GET;
  mPath = '/';

  controllerMethod = async () => {
    const users: User[] = await User.find({
      select: ['age', 'firstName', 'lastName', 'email', 'id'],
    });
    this.success(httpStatus.OK, { users });
  };
}

class UpdateUserController extends BaseController {
  mMethod = MethodsEnum.PUT;
  mPath = '/:userId';

  controllerMethod = async () => {
    const userId = this.req.params['userId'];
    let user: User = await User.findOne(userId);
    if (user) {
      if (this.body.firstName) {
        user.firstName = this.body.firstName;
      }
      if (this.body.lastName) {
        user.lastName = this.body.lastName;
      }
      if (this.body.email) {
        user.email = this.body.email;
      }
      if (this.body.age) {
        user.age = this.body.age;
      }
      user = await user.save();
      this.success(httpStatus.ACCEPTED, { user });
    } else {
      this.error(httpStatus.NOT_FOUND, {
        error: `User with id (${userId}) not found.`,
      });
    }
  };
}

class DeleteUserController extends BaseController {
  mMethod = MethodsEnum.DELETE;
  mPath = '/:userId';

  controllerMethod = async () => {
    const userId = this.req.params['userId'];
    const user = await User.findOne(userId);
    if (user) {
      await user.remove();
      this.success(httpStatus.OK, { id: userId });
    } else {
      this.error(httpStatus.NOT_FOUND, `User with id (${userId}) not found.`);
    }
  };
}

export {
  CreateUserController,
  RetrieveUserController,
  ListUserController,
  UpdateUserController,
  DeleteUserController,
};
