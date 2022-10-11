import Router from '@koa/router';

import * as users from './users.js';
import * as hunches from './hunches.js';
import * as games from './games.js';

export const router = new Router();

router.get('/login', users.login);

router.get('/users', users.list);
router.post('/users', users.create);

router.post('/hunches', hunches.create);

router.get('/games', games.list);

// router.get('/', async (ctx) => {
//     ctx.body = { msg: 'Hello World!!!' };
// });

router.get('/:username', users.hunchesList);
