import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/user-model';

export class AuthService {

    async login (email: string, password: string){
        
        const userModel = await UserModel.findByEmail(email);
            if(userModel && bcrypt.compareSync(password, userModel.password)) {
                return jwt.sign({ id: userModel.id, email: userModel.email }, "123456", { // "123456" -> hash identificador
                        expiresIn: "1h",
                })
        
            } else {
                throw new InvalidCredentialsError();
            }
    }
}

export class InvalidCredentialsError extends Error {}
