import 'module-alias/register';
import 'reflect-metadata';
console.clear();

import { Server } from '@baseClasses';
import middleWares from './server/middleware';
import routers from './server/routers';
import { databaseConnectionOptions } from '@db';

const app = new Server({
  port: process.env.PORT || 8000,
  databaseConnectionOptions,
  middleWares,
  routers,
});

app.startServer();
