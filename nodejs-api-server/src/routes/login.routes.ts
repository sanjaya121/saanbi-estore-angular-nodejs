import { Router } from "express";
import { getUsers,creatUsers, userLogin} from "../controller/users.controller";

const loginRoutes =Router();

loginRoutes.route('/')
.get(userLogin)
.post(userLogin)


export default loginRoutes;