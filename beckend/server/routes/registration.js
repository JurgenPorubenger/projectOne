import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import UsersControllers from "../controllers/user/users";
import jwt from "../middlewares/jwt";

const api = 'registration';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

router.post('/',  UsersControllers.register);

export default router;