import bcrypt from "bcrypt";
import * as mysql from "mysql2/promise";
import { Database } from "../database";
import { UserModel } from "../models/user-model";

export class CustomerService{

async register(data: { name: string, email: string, password: string, address: string, phone: string }){
  const { name, email, password, address, phone } = data
  const connection = Database.getInstance();
 
    const createdAt = new Date();
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userModel = await UserModel.create({
      name, 
      email,
      password: hashedPassword,
    })
   const userId = userModel.id;
   const [customersResult] = await connection.execute<mysql.ResultSetHeader>(
        'INSERT INTO customers (user_id, address, phone, created_at) VALUES (?, ?, ?, ?)',
        [userId, address, phone, createdAt]
    );
    return { id: customersResult.insertId, name, user_id: userId, address, phone, created_at: createdAt };

 }
}