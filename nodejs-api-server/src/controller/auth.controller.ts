import { Request, Response } from "express";
import { FieldPacket, OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { connection } from '../config/mysql.config';
import { HttpResponse } from '../domain/response';
import { Code } from '../enum/code.enum';
import { Status } from '../enum/status.enum';
import { PRODUCTS_QUERY } from "../query/products.query";
import bcrypt, { genSalt } from "bcryptjs";
import { USERS_QUERY } from '../query/users.query'

type ResultSet = [RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, FieldPacket[]|{}];


export const login = async (req:Request,res:Response): Promise<Response<HttpResponse>>=>{
  return res.status(Code.OK).send(new HttpResponse(Code.OK,Status.OK,"loing get api"))
 
}
export const userLogin = async (req:Request,res:Response): Promise<Response<HttpResponse>>=>{
  return res.status(Code.OK).send(new HttpResponse(Code.OK,Status.OK,"Logged in ssss"))
 
}
