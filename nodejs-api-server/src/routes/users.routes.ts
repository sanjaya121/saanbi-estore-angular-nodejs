import { Router } from "express";
import { getUsers,creatUsers, userLogin} from "../controller/users.controller";

const usersRoutes =Router();

usersRoutes.route('/')
.get(getUsers)
.post(creatUsers)
.post(userLogin)


export default usersRoutes;