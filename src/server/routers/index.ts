import { UserRouter } from 'server/routers/User';

export default [new UserRouter('/user')];

// GET /user/ 304 ...

/*
UserRouter '/user'
  - CreateUserController '/' POST
  - RetrieveUserController '/:userId' GET
  - ListUserController  '/' GET
  - SendEmailToUserController  '/send-email' POST

/user/ - POST
/user/:userId - GET
/user/ - GET
/user/send-email - POST
*/
