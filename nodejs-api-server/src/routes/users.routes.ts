import { Router } from "express";
import { getUsers,creatUsers, userLogin, login} from "../controller/users.controller";

const usersRoutes =Router();

usersRoutes.route('/')
.get(login)
.post(userLogin)


export default usersRoutes;